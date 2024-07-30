using watsonx.demo.srv as Model from '../db/watsonx-db';

service CatalogService {
    entity Incident as projection on Model.Incident;
    // @readonly entity Books as projection on my.Books;
    function classifyInput(desc: String) returns String;
}
