const uuid = require("uuid/v4");
const stripe = require("stripe")("sk_test_C0R32zWqqjSMaoyoM7Mij4vl00K1xbGVNt");

const getPrice = async(req,res,next)=>{
    let error;
    let status;
    try{
        const{product,token} = req.body;
        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id
        });
        const idempotencyKey= uuid();
        const charge = await stripe.charges.create({
            amount: product.price * 100,
            currency:"usd",
            customer:customer.id,
            receipt_email:token.email,
            description:`Purchased the ${product.name}`,
            shipping:{
                name:token.card.name,
                address:{
                    line1:token.card.address_line1,
                    line2: token.card.address_line2,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    postal_code:token.card.address_zip
                }
            }
        },{
            idempotencyKey
        }
        );
        console.log("Charge: ",{charge});
        status = "success";
    }catch(error){
        console.log("Error: ",error);
        status="failure";
    }
    res.json({error,status});
};
exports.getPrice= getPrice;