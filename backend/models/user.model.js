import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    name: {
        type: String,  
        required: true
    },

    email: {
        type: String,  
        required: true,
        unique: true
    },

    password: {
        type: String,  
        required: true
    }
}, 
{
    timestamps: true
});

// Pre-save hook to hash the password before saving the user document
userSchema.pre('Save', async function (next) {
    // Check if password is being modified (or if it's a new user)
    if (this.isModified('password')) {
        next(); 

    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
   // Continue with the save operation
  });

  userSchema.methods.matchPasswords = async function(enteredPassword) {
    
    return await bcrypt.compare(enteredPassword, this.password);
  }

  

const User = mongoose.model('User', userSchema);

export default User;
