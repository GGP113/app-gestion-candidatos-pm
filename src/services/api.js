const URL_Base = "localhost:8080/"

//se crea un endpoint por cada modelo que se tenga en la BD

export let end_points = {

    users: `${URL_Base}users`,
    offers: `${URL_Base}offers`,
    candidates: `${URL_Base}candidates`
   // users: URL_Base+"users"
    

}

