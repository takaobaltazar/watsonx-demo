namespace watsonx.demo.srv;

using {managed, cuid} from '@sap/cds/common';

@cds.persistence.skip
entity Incident : managed, cuid  {
    description         : String;
    status              : String default 'Pending';
    tags                : String;
}