import { ConnectionOptions, createConnection } from 'typeorm';
import { AccountTag } from '../myentities/account.tag';
import { User } from '../myentities/User';

import { Activity } from '../myentities/Activity';
import { Attachment } from '../myentities/Attachment';
import { Attence } from '../myentities/Attence';
import { Campaign } from '../myentities/Campaign';
import { Client } from '../myentities/Client';
import { ContacPerson } from '../myentities/ContacPerson';
import { Country } from '../myentities/Country';
import { Currency } from '../myentities/Currency';
import { Customization } from '../myentities/Customization';
import { DeliveryItem } from '../myentities/DeliveryItem';
import { DeliveryOrder } from '../myentities/DeliveryOrder';
import { ExchangeRate } from '../myentities/ExchangeRate';
import { Feedback } from '../myentities/Feedback';
import { Fhtest } from '../myentities/Fhtest';
import { Industry } from '../myentities/Industry';
import { InvoiceDetails } from '../myentities/InvoiceDetails';
import { InvoiceItem } from '../myentities/InvoiceItem';
import { InvoicePayment } from '../myentities/InvoicePayment';
import { Job } from '../myentities/Job';
import { JobItem } from '../myentities/JobItem';
import { Language } from '../myentities/Language';
import { Leadpools } from '../myentities/Leadpools';
import { Leads } from '../myentities/Leads';
import { MonthlyGoal } from '../myentities/MonthlyGoal';
import { Note } from '../myentities/Note';
import { Opportunity } from '../myentities/Opportunity';
import { OpportunityComments } from '../myentities/OpportunityComments';
import { Parameter } from '../myentities/Parameter';
import { PaymentTerm } from '../myentities/PaymentTerm';
import { Product } from '../myentities/Product';
import { ProductItem } from '../myentities/ProductItem';
import { ProductType } from '../myentities/ProductType';
import { PurchaseItem } from '../myentities/PurchaseItem';
import { PurchaseOrder } from '../myentities/PurchaseOrder';
import { Quotation } from '../myentities/Quotation';
import { QuotationComments } from '../myentities/QuotationComments';
import { QuotationItem } from '../myentities/QuotationItem';
import { Role } from '../myentities/Role';
import { ServiceContract } from '../myentities/ServiceContract';
import { ServiceItem } from '../myentities/ServiceItem';
import { Skill } from '../myentities/Skill';
import { StaffList } from '../myentities/StaffList';
import { Stage } from '../myentities/Stage';
import { Task } from '../myentities/Task';
import { TaskAttachment } from '../myentities/TaskAttachment';
import { TaskComments } from '../myentities/TaskComments';
import { Taxes } from '../myentities/Taxes';
import { Template } from '../myentities/Template';
import { TermCondition } from '../myentities/TermCondition';
import { Terms } from '../myentities/Terms';
import { TermsMember } from '../myentities/TermsMember';
import { Ticket } from '../myentities/Ticket';
import { Translate } from '../myentities/Translate';
import { Unit } from '../myentities/Unit';
import { UserRole } from '../myentities/UserRole';
import { Warranty } from '../myentities/Warranty';
import { Work } from '../myentities/Work';
import { WorkItem } from '../myentities/WorkItem';
import { WorkNote } from '../myentities/WorkNote';
import { FHcrmTable1 } from '../myentities/fhcrm_table1';
const options: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'openerp',
  password: 'openerp',
  database: 'crmwf',
  synchronize: false,
  entities: [
    AccountTag,
    User,
    Activity,
    Attachment,
    Attence,
    Campaign,
    Client,
    ContacPerson,
    Country,
    Currency,
    Customization,
    DeliveryItem,
    DeliveryOrder,
    ExchangeRate,
    Feedback,
    Fhtest,
    Industry,
    InvoiceDetails,
    InvoiceItem,
    InvoicePayment,
    Job,
    JobItem,
    Language,
    Leadpools,
    Leads,
    MonthlyGoal,
    Note,
    Opportunity,
    OpportunityComments,
    Parameter,
    PaymentTerm,
    Product,
    ProductItem,
    ProductType,
    PurchaseItem,
    PurchaseOrder,
    Quotation,
    QuotationComments,
    QuotationItem,
    Role,
    ServiceContract,
    ServiceItem,
    Skill,
    StaffList,
    Stage,
    Task,
    TaskAttachment,
    TaskComments,
    Taxes,
    Template,
    TermCondition,
    Terms,
    TermsMember,
    Ticket,
    Translate,
    Unit,
    User,
    UserRole,
    Warranty,
    Work,
    WorkItem,
    WorkNote,
    FHcrmTable1,
  ],
};
createConnection(options).then(
  async () => {
    console.log('FHDB connect: ok ');
  },
  (error) => console.log('Cannot connect: ', error),
);

/*
export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'openerp',
        password: 'openerp',
        database: 'crmwf',
        synchronize: false,
        entities: [AccountTag],
        //autoLoadEntities: true,
      }).then(
        (connection) => {


          const postRepository = connection.getRepository(AccountTag);

          postRepository
                .createQueryBuilder("post")
                .where("post.title=:keyword")
                .setParameter("keyword", "hello")
                .getMany();
            
            
      
  }),
];
*/
//createConnection();

///TypeOrmModule.forRoot({});
