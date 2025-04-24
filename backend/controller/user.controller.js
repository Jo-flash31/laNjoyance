const jwt = require("jsonwebtoken");
const ENV = require('../config/env');
const createError = require('../middlewares/error');
const Users = require('../models/user.model');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');


const postUser = async (req, res) => {
    
  try{
    console.log('add user : ', req.body);

    const passwordHashed = await  bcrypt.hash(req.body.password, 10);

    const response = await Users.create({
        ...req.body,
        password: passwordHashed
  });
  // Crée un jeton JWT
  const token = jwt.sign(
    {id: response._id},
    ENV.TOKEN,
    {expiresIn: "3min"}
  );
  
  
  // On envoie un email à notre nouvelle utilisateur avec le lien de verification


  // Ont envoie un email à notre nouvelle utilisateur avec le lien de verification 
  //a voir await sendEmail(response, token)

    res.status(201).json({
        message:'User created !',
        response
    });
  }catch(error){
    console.log('Error : ', error.message);
    res.status(500).json(error.message)
  }
}
const sign = async (req, res, next) => {
    try {
        //  1 RECHERCHE L'UTILISATEUR DANS LA BASE DE DONNES PAR SON EMAIL 
const user = await Users.findOne({email: req.body.email});
// SI L'UTILISATEUR N'EST PAS TROUVER , RENVOIE UNE ERREUR 404.
        if(!user) return res.status(404).json('User not found');
// On vérifie si l'utilisateur a confirmé son mail
// a voir if(!user.isVerified) return next(createError(403, 'Veuillez vérifier votre Email SVP!!!!'))


// 3Compare le mot de passe fourni dans la requete 

// avec le mot de passe de l'utilisateur qui est dans la bdd
const  comparepassword = await bcrypt.compare(
    req.body.password,
    user.password
)

// 4 SI LE MOT DE PASSE EST INCORRECT , RENVOIE ERREUR 400 
if(!comparepassword) return res.status(400).json('Wrong Credentials !')

    // Creer un jeton jwt
    const token = jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        ENV.TOKEN,
        {expiresIn: "24h"}
    );


    const { password, ...others } = user._doc

    res.cookie('access_token', token , {
      httpOnly: true, // il ne peut pas étre accédé via le javasscript
    secure: false,// A mettre à true pour HTTPS SITE EN LIGNE 
    sameSite: 'strict' // Protéger contres les attaques CSRF
   })
    .status(200).json(others);
    } catch (error) {
        console.log('Error : ' ,error.message);
        res.status(500).json(error.message)
        
    }
    
}

const verifyEmail = async (req, res, next) => {
  try {
    // Vérifier le token
    const token = req.params.token;
    const decoded = jwt.verify(token, ENV.TOKEN);
    const userId = decoded.id;

    // Mettre à jour l'utilisateur dans la base de données
    await Users.findByIdAndUpdate(userId, { isVerified: true });

    res.status(200).json({ message: 'Email verified successfully!' });
  } catch (error) {
    console.error('Error verifying email:', error);
    res.status(500).json({ message: 'Error verifying email' });
  }
}

const getAllUsers = async (req, res) => {
    try {
        const result = await userModel.find();
        res.status(200).json(result);
    } catch (error) {
        console.log('Error : ', error.message);  
    }
}
const getUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if(!user) return next(createError(404, 'User not found !!!'))
        res.status(200).json(user);
    } catch (error) {
        console.log('Error : ', error.message);  
    }
}


const updateUser = async(req, res, next) => {
    try{
        // A faire : Vérifier si t'es connecté ?
        // :
        // Vérifie si t'es un admin ensuite ?
        // :

        // Est-ce que l'user existe ?
        const user = await Users.findById(req.params.id)
        if(!user) return next(createError(404, "This user doesn't exist"))

        // Si tout est Ok, alors tu peux mettre à jour:
        const userToUpdate = await Users.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(userToUpdate)


    }

    catch(error){
        next(createError(404, "Damn, it's not working: ", error.message))
    }
} 

const deleteUser = async(req, res, next) => {
    try{

        // Vérifier si l'email est déjà enregistré
        const findUser = await Users.findById(req.params.id)
        if(!findUser) return next(createError(404, 'User not found'))

        const userToDelete = await Users.findByIdAndDelete(req.params.id);
        res.status(200).json('Vous avez bien supprimé cet utilisateur')
    }
    catch(error){
        next(createError(404, "oopsy... :", error.message))

    }

        
        
    }




module.exports = {
    postUser,
    sign,
    verifyEmail,
    getAllUsers,
    updateUser,
    deleteUser,
    getUser

}
