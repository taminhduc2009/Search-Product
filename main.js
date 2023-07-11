let products = {
    data:[
        {
            productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
            price: "42",
            image: "https://product.hstatic.net/1000378196/product/z3393718306380_9cb83d1efba39fe0bb0c7e4ba74f9024_e46acded798a4d7b97a0261c1a2048cf_master.jpg"
        },

        {
            productName: "LEVENTS® FUNNY CROCODILE TEE/ BLUE",
            price: "37",
            image: "https://product.hstatic.net/1000378196/product/z3381587303453_5842f45eb417f8a1c428e660ed766cd4_5a355bb37d2e4c429e8778030c0e8b14_master.jpg"
        },

        {
            productName: "LEVENTS® EARTH TEE/ PURPLE",
            price: "36",
            image: "https://product.hstatic.net/1000378196/product/z3370728736105_b355c87d43431b4afd035723f521e029_0ac53717a2ae4855a9d4411ecc9b7f3b_master.jpg"
        },
    ]

}
for(let i of products.data){
    let card=document.createElement("div")
    card.classList.add("card")

    let imgContainer=document.createElement("div")
    imgContainer.classList.add("image-container")

    card.appendChild(imgContainer);
    document.getElementbyId("products").appendChild(card);
}