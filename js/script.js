const solutions = [
    {id: 1, title:"Reduce Single-Use Plastics", desription:"Plastic production is a significant and growing contributor to climate change, and microplastics endanger nature and human health alike. "},
    {id: 2, title:"Say “Not So Fast” to Fast Fashion", desription:"Fast fashion relies on the rapid production of clothing, demands vast amounts of natural resources and is often made from synthetic materials like polyester, which release microplastics. These microplastics, invisible to the naked eye, are toxic and pose a major threat to the environment. During clothing manufacturing, microfibers and plastics are released and estimates indicate that textile production is on track to triple by 2050. Fast fashion also promotes a throwaway culture, where clothes are quickly discarded after a few uses, leading to massive textile waste. Millions of tons of discarded clothes end up in landfills, taking hundreds of years to decompose and releasing harmful greenhouse gases and toxins. "},
    {id: 3, title:"Make Sustainable Purchases", desription:"In addition to making more sustainable decisions around your clothing purchases, you can also make sustainable choices for your other needs."},
    {id: 4, title:"Reduce Your Food Waste", desription:"Globally, around 931 million tonnes of food is wasted each year. In the US alone, approximately 60 million tons of food is wasted annually, equating to nearly 40% of the entire US food supply. When this waste ends up in landfills, it contributes to greenhouse gas emissions that accelerate climate change. "},
    {id: 5, title:"Address Wastewater", desription:"Sewage pollution threatens biodiversity, especially in the ocean. While the environmental impact is significant, transformational solutions exist!"},
];

let ul = document.getElementById("sol");

solutions.map(solution => {
    let li = document.createElement("li");
    li.innerHTML = `<h3>${solution.id}. ${solution.title}</h3><p>${solution.desription}</p>`;
    ul.appendChild(li);
})

const join_form = document.getElementById('join_form');  
    join_form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const firstname = document.getElementById('first_name').value;
        const lastname = document.getElementById('last_name').value;
        const email = document.getElementById('email').value;
        const role = document.getElementById('role').value;
        

        if (firstname && lastname && email && role !== 'select') {
            alert('Successfully registered');
            form.reset();
        }
    });