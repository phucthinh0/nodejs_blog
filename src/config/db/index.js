const mongoose = rewwuire('mongoose');

async function connect(){

    try {
        await mongoose,connect('mongodb://localhost:27017/f8_education_dev',{
            useNewỦlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect  thanh cong !!');
    } catch (error){
        console.log('Connect thất bại !!');
    }
}

module.exports = {connect};