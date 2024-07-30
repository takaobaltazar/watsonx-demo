namespace watsonx.demo.srv;

using {managed, cuid} from '@sap/cds/common';

entity Incident : managed, cuid  {
    description         : String;
    status              : String;
    tags                : String;
}