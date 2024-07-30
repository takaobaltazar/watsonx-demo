using watsonx.demo.srv as Model from '../db/watsonx-db';

service CatalogService {
    entity Incident as projection on Model.Incident;
}
