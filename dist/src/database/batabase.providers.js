"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const account_tag_1 = require("../myentities/account.tag");
const User_1 = require("../myentities/User");
const Activity_1 = require("../myentities/Activity");
const Attachment_1 = require("../myentities/Attachment");
const Attence_1 = require("../myentities/Attence");
const Campaign_1 = require("../myentities/Campaign");
const Client_1 = require("../myentities/Client");
const ContacPerson_1 = require("../myentities/ContacPerson");
const Country_1 = require("../myentities/Country");
const Currency_1 = require("../myentities/Currency");
const Customization_1 = require("../myentities/Customization");
const DeliveryItem_1 = require("../myentities/DeliveryItem");
const DeliveryOrder_1 = require("../myentities/DeliveryOrder");
const ExchangeRate_1 = require("../myentities/ExchangeRate");
const Feedback_1 = require("../myentities/Feedback");
const Fhtest_1 = require("../myentities/Fhtest");
const Industry_1 = require("../myentities/Industry");
const InvoiceDetails_1 = require("../myentities/InvoiceDetails");
const InvoiceItem_1 = require("../myentities/InvoiceItem");
const InvoicePayment_1 = require("../myentities/InvoicePayment");
const Job_1 = require("../myentities/Job");
const JobItem_1 = require("../myentities/JobItem");
const Language_1 = require("../myentities/Language");
const Leadpools_1 = require("../myentities/Leadpools");
const Leads_1 = require("../myentities/Leads");
const MonthlyGoal_1 = require("../myentities/MonthlyGoal");
const Note_1 = require("../myentities/Note");
const Opportunity_1 = require("../myentities/Opportunity");
const OpportunityComments_1 = require("../myentities/OpportunityComments");
const Parameter_1 = require("../myentities/Parameter");
const PaymentTerm_1 = require("../myentities/PaymentTerm");
const Product_1 = require("../myentities/Product");
const ProductItem_1 = require("../myentities/ProductItem");
const ProductType_1 = require("../myentities/ProductType");
const PurchaseItem_1 = require("../myentities/PurchaseItem");
const PurchaseOrder_1 = require("../myentities/PurchaseOrder");
const Quotation_1 = require("../myentities/Quotation");
const QuotationComments_1 = require("../myentities/QuotationComments");
const QuotationItem_1 = require("../myentities/QuotationItem");
const Role_1 = require("../myentities/Role");
const ServiceContract_1 = require("../myentities/ServiceContract");
const ServiceItem_1 = require("../myentities/ServiceItem");
const Skill_1 = require("../myentities/Skill");
const StaffList_1 = require("../myentities/StaffList");
const Stage_1 = require("../myentities/Stage");
const Task_1 = require("../myentities/Task");
const TaskAttachment_1 = require("../myentities/TaskAttachment");
const TaskComments_1 = require("../myentities/TaskComments");
const Taxes_1 = require("../myentities/Taxes");
const Template_1 = require("../myentities/Template");
const TermCondition_1 = require("../myentities/TermCondition");
const Terms_1 = require("../myentities/Terms");
const TermsMember_1 = require("../myentities/TermsMember");
const Ticket_1 = require("../myentities/Ticket");
const Translate_1 = require("../myentities/Translate");
const Unit_1 = require("../myentities/Unit");
const UserRole_1 = require("../myentities/UserRole");
const Warranty_1 = require("../myentities/Warranty");
const Work_1 = require("../myentities/Work");
const WorkItem_1 = require("../myentities/WorkItem");
const WorkNote_1 = require("../myentities/WorkNote");
const fhcrm_table1_1 = require("../myentities/fhcrm_table1");
const options = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'openerp',
    password: 'openerp',
    database: 'crmwf',
    synchronize: false,
    entities: [
        account_tag_1.AccountTag,
        User_1.User,
        Activity_1.Activity,
        Attachment_1.Attachment,
        Attence_1.Attence,
        Campaign_1.Campaign,
        Client_1.Client,
        ContacPerson_1.ContacPerson,
        Country_1.Country,
        Currency_1.Currency,
        Customization_1.Customization,
        DeliveryItem_1.DeliveryItem,
        DeliveryOrder_1.DeliveryOrder,
        ExchangeRate_1.ExchangeRate,
        Feedback_1.Feedback,
        Fhtest_1.Fhtest,
        Industry_1.Industry,
        InvoiceDetails_1.InvoiceDetails,
        InvoiceItem_1.InvoiceItem,
        InvoicePayment_1.InvoicePayment,
        Job_1.Job,
        JobItem_1.JobItem,
        Language_1.Language,
        Leadpools_1.Leadpools,
        Leads_1.Leads,
        MonthlyGoal_1.MonthlyGoal,
        Note_1.Note,
        Opportunity_1.Opportunity,
        OpportunityComments_1.OpportunityComments,
        Parameter_1.Parameter,
        PaymentTerm_1.PaymentTerm,
        Product_1.Product,
        ProductItem_1.ProductItem,
        ProductType_1.ProductType,
        PurchaseItem_1.PurchaseItem,
        PurchaseOrder_1.PurchaseOrder,
        Quotation_1.Quotation,
        QuotationComments_1.QuotationComments,
        QuotationItem_1.QuotationItem,
        Role_1.Role,
        ServiceContract_1.ServiceContract,
        ServiceItem_1.ServiceItem,
        Skill_1.Skill,
        StaffList_1.StaffList,
        Stage_1.Stage,
        Task_1.Task,
        TaskAttachment_1.TaskAttachment,
        TaskComments_1.TaskComments,
        Taxes_1.Taxes,
        Template_1.Template,
        TermCondition_1.TermCondition,
        Terms_1.Terms,
        TermsMember_1.TermsMember,
        Ticket_1.Ticket,
        Translate_1.Translate,
        Unit_1.Unit,
        User_1.User,
        UserRole_1.UserRole,
        Warranty_1.Warranty,
        Work_1.Work,
        WorkItem_1.WorkItem,
        WorkNote_1.WorkNote,
        fhcrm_table1_1.FHcrmTable1,
    ],
};
(0, typeorm_1.createConnection)(options).then(async () => {
    console.log('FHDB connect: ok ');
}, (error) => console.log('Cannot connect: ', error));
//# sourceMappingURL=batabase.providers.js.map