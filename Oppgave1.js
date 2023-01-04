var ansatt = [
    {
        ansatt_id: 1,
        forNavn: "Laila Johanne",
        etterNavn: "Handelsby",
        jobbNavn: "Rektor",
        bildet: "./img/rektor-laila-handelsby.JPG",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam, expedita cumque odio officiis optioiste officia dolores inventore corporis ipsam deserunt exercitationem labore maiores nesciunt adipisci assumenda maxime? Non."
    },
    {
        ansatt_id: 2,
        forNavn: "Erik",
        etterNavn: "Bergerud",
        jobbNavn: "Undervisningsleder",
        bildet: "./img/erik-bergerud.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam, expedita cumque odio officiis optioiste officia dolores inventore corporis ipsam deserunt exercitationem labore maiores nesciunt adipisci assumenda maxime? Non."
    },
    {
        ansatt_id: 3,
        forNavn: "Torben",
        etterNavn: "Andersen",
        jobbNavn: "Manager",
        bildet: "./img/torben-gjerstad.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam, expedita cumque odio officiis optioiste officia dolores inventore corporis ipsam deserunt exercitationem labore maiores nesciunt adipisci assumenda maxime? Non."
    },
    {
        ansatt_id: 4,
        forNavn: "Martin Sandø",
        etterNavn: "Frank",
        jobbNavn: "Studie leder",
        bildet: "./img/martin-frank.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam, expedita cumque odio officiis optioiste officia dolores inventore corporis ipsam deserunt exercitationem labore maiores nesciunt adipisci assumenda maxime? Non."
    },
    {
        ansatt_id: 5,
        forNavn: "Sissel",
        etterNavn: "Moen",
        jobbNavn: "Administrasjonsleder",
        bildet: "./img/sissel-moen.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam, expedita cumque odio officiis optioiste officia dolores inventore corporis ipsam deserunt exercitationem labore maiores nesciunt adipisci assumenda maxime? Non."
    },
]



var button = document.querySelector(".button").addEventListener("click", function () {
    var navn = document.querySelector(".personInput").value;
    console.log(navn);

    for (const i of ansatt) {
        if (navn == i.forNavn) {
            document.querySelector("#container_img").innerHTML = `<img id="container_imgg" src="${i.bildet}" alt="">`

            document.querySelector("#ansattID").innerHTML = i.forNavn;

            document.querySelector("#ansattP").innerHTML = i.jobbNavn;

            document.querySelector("#info").innerHTML = i.info;

        }
    }
})

// Jeg greide ikke å cleare teksten i input box og få til lower case
