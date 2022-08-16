"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FHChartController = void 0;
const common_1 = require("@nestjs/common");
const FHUserService_1 = require("../myservices/FHUserService");
let FHChartController = class FHChartController {
    constructor() {
        this.fhuserService = new FHUserService_1.FHUserService();
    }
    async createFHUser(FHUserVo) {
        return this.fhuserService.createFHUser(FHUserVo);
    }
    async UsersLogin(query) {
        const email = query.email;
        const password = query.password;
        return this.fhuserService.UsersLogin(email, password);
    }
    async updateaFHUser(userToken, Id, FHUserVo) {
        let userId = '';
        if (userToken != '') {
            userId = userToken;
        }
        return this.fhuserService.updateaFHUser(Id, userId, FHUserVo);
    }
    async removeFHUser(Id) {
        return this.fhuserService.removeFHUser([Id]);
    }
    async getFHUserById(Id) {
        return this.fhuserService.getFHUserById(Id);
    }
    async getFHUser(search) {
        return this.fhuserService.getFHUser(search);
    }
    async getFHUserAll() {
        return this.fhuserService.getFHUserAll();
    }
    async getFHUserAllView() {
        return this.fhuserService.getFHUserAllView();
    }
    async getFHAccountTagList(query) {
        const fhJSON = {
            data: [
                {
                    id: 1000,
                    name: 'James Butt',
                    country: {
                        name: 'Algeria',
                        code: 'dz',
                    },
                    company: 'Benton, John B Jr',
                    date: '2015-09-13',
                    status: 'unqualified',
                    verified: true,
                    activity: 17,
                    representative: {
                        name: 'Ioni Bowcher',
                        image: 'ionibowcher.png',
                    },
                    balance: 70663,
                },
                {
                    id: 1001,
                    name: 'Josephine Darakjy',
                    country: {
                        name: 'Egypt',
                        code: 'eg',
                    },
                    company: 'Chanay, Jeffrey A Esq',
                    date: '2019-02-09',
                    status: 'proposal',
                    verified: true,
                    activity: 0,
                    representative: {
                        name: 'Amy Elsner',
                        image: 'amyelsner.png',
                    },
                    balance: 82429,
                },
                {
                    id: 1002,
                    name: 'Art Venere',
                    country: {
                        name: 'Panama',
                        code: 'pa',
                    },
                    company: 'Chemel, James L Cpa',
                    date: '2017-05-13',
                    status: 'qualified',
                    verified: false,
                    activity: 63,
                    representative: {
                        name: 'Asiya Javayant',
                        image: 'asiyajavayant.png',
                    },
                    balance: 28334,
                },
                {
                    id: 1003,
                    name: 'Lenna Paprocki',
                    country: {
                        name: 'Slovenia',
                        code: 'si',
                    },
                    company: 'Feltz Printing Service',
                    date: '2020-09-15',
                    status: 'new',
                    verified: false,
                    activity: 37,
                    representative: {
                        name: 'Xuxue Feng',
                        image: 'xuxuefeng.png',
                    },
                    balance: 88521,
                },
                {
                    id: 1004,
                    name: 'Donette Foller',
                    country: {
                        name: 'South Africa',
                        code: 'za',
                    },
                    company: 'Printing Dimensions',
                    date: '2016-05-20',
                    status: 'proposal',
                    verified: true,
                    activity: 33,
                    representative: {
                        name: 'Asiya Javayant',
                        image: 'asiyajavayant.png',
                    },
                    balance: 93905,
                },
                {
                    id: 1005,
                    name: 'Simona Morasca',
                    country: {
                        name: 'Egypt',
                        code: 'eg',
                    },
                    company: 'Chapman, Ross E Esq',
                    date: '2018-02-16',
                    status: 'qualified',
                    verified: false,
                    activity: 68,
                    representative: {
                        name: 'Ivan Magalhaes',
                        image: 'ivanmagalhaes.png',
                    },
                    balance: 50041,
                },
                {
                    id: 1006,
                    name: 'Mitsue Tollner',
                    country: {
                        name: 'Paraguay',
                        code: 'py',
                    },
                    company: 'Morlong Associates',
                    date: '2018-02-19',
                    status: 'renewal',
                    verified: true,
                    activity: 54,
                    representative: {
                        name: 'Ivan Magalhaes',
                        image: 'ivanmagalhaes.png',
                    },
                    balance: 58706,
                },
                {
                    id: 1007,
                    name: 'Leota Dilliard',
                    country: {
                        name: 'Serbia',
                        code: 'rs',
                    },
                    company: 'Commercial Press',
                    date: '2019-08-13',
                    status: 'renewal',
                    verified: true,
                    activity: 69,
                    representative: {
                        name: 'Onyama Limba',
                        image: 'onyamalimba.png',
                    },
                    balance: 26640,
                },
                {
                    id: 1008,
                    name: 'Sage Wieser',
                    country: {
                        name: 'Egypt',
                        code: 'eg',
                    },
                    company: 'Truhlar And Truhlar Attys',
                    date: '2018-11-21',
                    status: 'unqualified',
                    verified: true,
                    activity: 76,
                    representative: {
                        name: 'Ivan Magalhaes',
                        image: 'ivanmagalhaes.png',
                    },
                    balance: 65369,
                },
                {
                    id: 1009,
                    name: 'Kris Marrier',
                    country: {
                        name: 'Mexico',
                        code: 'mx',
                    },
                    company: 'King, Christopher A Esq',
                    date: '2015-07-07',
                    status: 'proposal',
                    verified: false,
                    activity: 3,
                    representative: {
                        name: 'Onyama Limba',
                        image: 'onyamalimba.png',
                    },
                    balance: 63451,
                },
                {
                    id: 1010,
                    name: 'Minna Amigon',
                    country: {
                        name: 'Romania',
                        code: 'ro',
                    },
                    company: 'Dorl, James J Esq',
                    date: '2018-11-07',
                    status: 'qualified',
                    verified: false,
                    activity: 38,
                    representative: {
                        name: 'Anna Fali',
                        image: 'annafali.png',
                    },
                    balance: 71169,
                },
                {
                    id: 1011,
                    name: 'Abel Maclead',
                    country: {
                        name: 'Singapore',
                        code: 'sg',
                    },
                    company: 'Rangoni Of Florence',
                    date: '2017-03-11',
                    status: 'qualified',
                    verified: true,
                    activity: 87,
                    representative: {
                        name: 'Bernardo Dominic',
                        image: 'bernardodominic.png',
                    },
                    balance: 96842,
                },
                {
                    id: 1012,
                    name: 'Kiley Caldarera',
                    country: {
                        name: 'Serbia',
                        code: 'rs',
                    },
                    company: 'Feiner Bros',
                    date: '2015-10-20',
                    status: 'unqualified',
                    verified: false,
                    activity: 80,
                    representative: {
                        name: 'Onyama Limba',
                        image: 'onyamalimba.png',
                    },
                    balance: 92734,
                },
                {
                    id: 1013,
                    name: 'Graciela Ruta',
                    country: {
                        name: 'Chile',
                        code: 'cl',
                    },
                    company: 'Buckley Miller & Wright',
                    date: '2016-07-25',
                    status: 'negotiation',
                    verified: false,
                    activity: 59,
                    representative: {
                        name: 'Amy Elsner',
                        image: 'amyelsner.png',
                    },
                    balance: 45250,
                },
                {
                    id: 1014,
                    name: 'Cammy Albares',
                    country: {
                        name: 'Philippines',
                        code: 'ph',
                    },
                    company: 'Rousseaux, Michael Esq',
                    date: '2019-06-25',
                    status: 'new',
                    verified: true,
                    activity: 90,
                    representative: {
                        name: 'Asiya Javayant',
                        image: 'asiyajavayant.png',
                    },
                    balance: 30236,
                },
                {
                    id: 1015,
                    name: 'Mattie Poquette',
                    country: {
                        name: 'Venezuela',
                        code: 've',
                    },
                    company: 'Century Communications',
                    date: '2017-12-12',
                    status: 'negotiation',
                    verified: false,
                    activity: 52,
                    representative: {
                        name: 'Anna Fali',
                        image: 'annafali.png',
                    },
                    balance: 64533,
                },
                {
                    id: 1016,
                    name: 'Meaghan Garufi',
                    country: {
                        name: 'Malaysia',
                        code: 'my',
                    },
                    company: 'Bolton, Wilbur Esq',
                    date: '2018-07-04',
                    status: 'unqualified',
                    verified: false,
                    activity: 31,
                    representative: {
                        name: 'Ivan Magalhaes',
                        image: 'ivanmagalhaes.png',
                    },
                    balance: 37279,
                },
                {
                    id: 1017,
                    name: 'Gladys Rim',
                    country: {
                        name: 'Netherlands',
                        code: 'nl',
                    },
                    company: 'T M Byxbee Company Pc',
                    date: '2020-02-27',
                    status: 'renewal',
                    verified: true,
                    activity: 48,
                    representative: {
                        name: 'Stephen Shaw',
                        image: 'stephenshaw.png',
                    },
                    balance: 27381,
                },
                {
                    id: 1018,
                    name: 'Yuki Whobrey',
                    country: {
                        name: 'Israel',
                        code: 'il',
                    },
                    company: 'Farmers Insurance Group',
                    date: '2017-12-21',
                    status: 'negotiation',
                    verified: true,
                    activity: 16,
                    representative: {
                        name: 'Bernardo Dominic',
                        image: 'bernardodominic.png',
                    },
                    balance: 9257,
                },
                {
                    id: 1019,
                    name: 'Fletcher Flosi',
                    country: {
                        name: 'Argentina',
                        code: 'ar',
                    },
                    company: 'Post Box Services Plus',
                    date: '2016-01-04',
                    status: 'renewal',
                    verified: true,
                    activity: 19,
                    representative: {
                        name: 'Xuxue Feng',
                        image: 'xuxuefeng.png',
                    },
                    balance: 67783,
                },
                {
                    id: 1020,
                    name: 'Bette Nicka',
                    country: {
                        name: 'Paraguay',
                        code: 'py',
                    },
                    company: 'Sport En Art',
                    date: '2016-10-21',
                    status: 'renewal',
                    verified: false,
                    activity: 100,
                    representative: {
                        name: 'Onyama Limba',
                        image: 'onyamalimba.png',
                    },
                    balance: 4609,
                },
                {
                    id: 1021,
                    name: 'Veronika Inouye',
                    country: {
                        name: 'Ecuador',
                        code: 'ec',
                    },
                    company: 'C 4 Network Inc',
                    date: '2017-03-24',
                    status: 'renewal',
                    verified: false,
                    activity: 72,
                    representative: {
                        name: 'Ioni Bowcher',
                        image: 'ionibowcher.png',
                    },
                    balance: 26565,
                },
                {
                    id: 1022,
                    name: 'Willard Kolmetz',
                    country: {
                        name: 'Tunisia',
                        code: 'tn',
                    },
                    company: 'Ingalls, Donald R Esq',
                    date: '2017-04-15',
                    status: 'renewal',
                    verified: true,
                    activity: 94,
                    representative: {
                        name: 'Asiya Javayant',
                        image: 'asiyajavayant.png',
                    },
                    balance: 75876,
                },
                {
                    id: 1023,
                    name: 'Maryann Royster',
                    country: {
                        name: 'Belarus',
                        code: 'by',
                    },
                    company: 'Franklin, Peter L Esq',
                    date: '2017-03-11',
                    status: 'qualified',
                    verified: false,
                    activity: 56,
                    representative: {
                        name: 'Elwin Sharvill',
                        image: 'elwinsharvill.png',
                    },
                    balance: 41121,
                },
                {
                    id: 1024,
                    name: 'Alisha Slusarski',
                    country: {
                        name: 'Iceland',
                        code: 'is',
                    },
                    company: 'Wtlz Power 107 Fm',
                    date: '2018-03-27',
                    status: 'qualified',
                    verified: true,
                    activity: 7,
                    representative: {
                        name: 'Stephen Shaw',
                        image: 'stephenshaw.png',
                    },
                    balance: 91691,
                },
                {
                    id: 1025,
                    name: 'Allene Iturbide',
                    country: {
                        name: 'Italy',
                        code: 'it',
                    },
                    company: 'Ledecky, David Esq',
                    date: '2016-02-20',
                    status: 'qualified',
                    verified: true,
                    activity: 1,
                    representative: {
                        name: 'Ivan Magalhaes',
                        image: 'ivanmagalhaes.png',
                    },
                    balance: 40137,
                },
                {
                    id: 1026,
                    name: 'Chanel Caudy',
                    country: {
                        name: 'Argentina',
                        code: 'ar',
                    },
                    company: 'Professional Image Inc',
                    date: '2018-06-24',
                    status: 'new',
                    verified: true,
                    activity: 26,
                    representative: {
                        name: 'Ioni Bowcher',
                        image: 'ionibowcher.png',
                    },
                    balance: 21304,
                },
                {
                    id: 1027,
                    name: 'Ezekiel Chui',
                    country: {
                        name: 'Ireland',
                        code: 'ie',
                    },
                    company: 'Sider, Donald C Esq',
                    date: '2016-09-24',
                    status: 'new',
                    verified: false,
                    activity: 76,
                    representative: {
                        name: 'Amy Elsner',
                        image: 'amyelsner.png',
                    },
                    balance: 60454,
                },
                {
                    id: 1028,
                    name: 'Willow Kusko',
                    country: {
                        name: 'Romania',
                        code: 'ro',
                    },
                    company: 'U Pull It',
                    date: '2020-04-11',
                    status: 'qualified',
                    verified: true,
                    activity: 7,
                    representative: {
                        name: 'Onyama Limba',
                        image: 'onyamalimba.png',
                    },
                    balance: 17565,
                },
                {
                    id: 1029,
                    name: 'Bernardo Figeroa',
                    country: {
                        name: 'Israel',
                        code: 'il',
                    },
                    company: 'Clark, Richard Cpa',
                    date: '2018-04-11',
                    status: 'renewal',
                    verified: true,
                    activity: 81,
                    representative: {
                        name: 'Ioni Bowcher',
                        image: 'ionibowcher.png',
                    },
                    balance: 17774,
                },
                {
                    id: 1030,
                    name: 'Ammie Corrio',
                    country: {
                        name: 'Hungary',
                        code: 'hu',
                    },
                    company: 'Moskowitz, Barry S',
                    date: '2016-06-11',
                    status: 'negotiation',
                    verified: true,
                    activity: 56,
                    representative: {
                        name: 'Asiya Javayant',
                        image: 'asiyajavayant.png',
                    },
                    balance: 49201,
                },
                {
                    id: 1031,
                    name: 'Francine Vocelka',
                    country: {
                        name: 'Honduras',
                        code: 'hn',
                    },
                    company: 'Cascade Realty Advisors Inc',
                    date: '2017-08-02',
                    status: 'qualified',
                    verified: true,
                    activity: 94,
                    representative: {
                        name: 'Ioni Bowcher',
                        image: 'ionibowcher.png',
                    },
                    balance: 67126,
                },
                {
                    id: 1032,
                    name: 'Ernie Stenseth',
                    country: {
                        name: 'Australia',
                        code: 'au',
                    },
                    company: 'Knwz Newsradio',
                    date: '2018-06-06',
                    status: 'renewal',
                    verified: true,
                    activity: 68,
                    representative: {
                        name: 'Xuxue Feng',
                        image: 'xuxuefeng.png',
                    },
                    balance: 76017,
                },
                {
                    id: 1033,
                    name: 'Albina Glick',
                    country: {
                        name: 'Ukraine',
                        code: 'ua',
                    },
                    company: 'Giampetro, Anthony D',
                    date: '2019-08-08',
                    status: 'proposal',
                    verified: true,
                    activity: 85,
                    representative: {
                        name: 'Bernardo Dominic',
                        image: 'bernardodominic.png',
                    },
                    balance: 91201,
                },
                {
                    id: 1034,
                    name: 'Alishia Sergi',
                    country: {
                        name: 'Qatar',
                        code: 'qa',
                    },
                    company: 'Milford Enterprises Inc',
                    date: '2018-05-19',
                    status: 'negotiation',
                    verified: false,
                    activity: 46,
                    representative: {
                        name: 'Ivan Magalhaes',
                        image: 'ivanmagalhaes.png',
                    },
                    balance: 12237,
                },
                {
                    id: 1035,
                    name: 'Solange Shinko',
                    country: {
                        name: 'Cameroon',
                        code: 'cm',
                    },
                    company: 'Mosocco, Ronald A',
                    date: '2015-02-12',
                    status: 'qualified',
                    verified: true,
                    activity: 32,
                    representative: {
                        name: 'Onyama Limba',
                        image: 'onyamalimba.png',
                    },
                    balance: 34072,
                },
                {
                    id: 1036,
                    name: 'Jose Stockham',
                    country: {
                        name: 'Italy',
                        code: 'it',
                    },
                    company: 'Tri State Refueler Co',
                    date: '2018-04-25',
                    status: 'qualified',
                    verified: true,
                    activity: 77,
                    representative: {
                        name: 'Amy Elsner',
                        image: 'amyelsner.png',
                    },
                    balance: 94909,
                },
                {
                    id: 1037,
                    name: 'Rozella Ostrosky',
                    country: {
                        name: 'Venezuela',
                        code: 've',
                    },
                    company: 'Parkway Company',
                    date: '2016-02-27',
                    status: 'unqualified',
                    verified: true,
                    activity: 66,
                    representative: {
                        name: 'Amy Elsner',
                        image: 'amyelsner.png',
                    },
                    balance: 57245,
                },
                {
                    id: 1038,
                    name: 'Valentine Gillian',
                    country: {
                        name: 'Paraguay',
                        code: 'py',
                    },
                    company: 'Fbs Business Finance',
                    date: '2019-09-17',
                    status: 'qualified',
                    verified: true,
                    activity: 25,
                    representative: {
                        name: 'Bernardo Dominic',
                        image: 'bernardodominic.png',
                    },
                    balance: 75502,
                },
                {
                    id: 1039,
                    name: 'Kati Rulapaugh',
                    country: {
                        name: 'Puerto Rico',
                        code: 'pr',
                    },
                    company: 'Eder Assocs Consltng Engrs Pc',
                    date: '2016-12-03',
                    status: 'renewal',
                    verified: false,
                    activity: 51,
                    representative: {
                        name: 'Ioni Bowcher',
                        image: 'ionibowcher.png',
                    },
                    balance: 82075,
                },
                {
                    id: 1040,
                    name: 'Youlanda Schemmer',
                    country: {
                        name: 'Bolivia',
                        code: 'bo',
                    },
                    company: 'Tri M Tool Inc',
                    date: '2017-12-15',
                    status: 'negotiation',
                    verified: true,
                    activity: 49,
                    representative: {
                        name: 'Xuxue Feng',
                        image: 'xuxuefeng.png',
                    },
                    balance: 19208,
                },
                {
                    id: 1041,
                    name: 'Dyan Oldroyd',
                    country: {
                        name: 'Argentina',
                        code: 'ar',
                    },
                    company: 'International Eyelets Inc',
                    date: '2017-02-02',
                    status: 'qualified',
                    verified: false,
                    activity: 5,
                    representative: {
                        name: 'Amy Elsner',
                        image: 'amyelsner.png',
                    },
                    balance: 50194,
                },
                {
                    id: 1042,
                    name: 'Roxane Campain',
                    country: {
                        name: 'France',
                        code: 'fr',
                    },
                    company: 'Rapid Trading Intl',
                    date: '2018-12-25',
                    status: 'unqualified',
                    verified: false,
                    activity: 100,
                    representative: {
                        name: 'Anna Fali',
                        image: 'annafali.png',
                    },
                    balance: 77714,
                },
                {
                    id: 1043,
                    name: 'Lavera Perin',
                    country: {
                        name: 'Vietnam',
                        code: 'vn',
                    },
                    company: 'Abc Enterprises Inc',
                    date: '2018-04-10',
                    status: 'qualified',
                    verified: false,
                    activity: 71,
                    representative: {
                        name: 'Stephen Shaw',
                        image: 'stephenshaw.png',
                    },
                    balance: 35740,
                },
                {
                    id: 1044,
                    name: 'Erick Ferencz',
                    country: {
                        name: 'Belgium',
                        code: 'be',
                    },
                    company: 'Cindy Turner Associates',
                    date: '2018-05-06',
                    status: 'unqualified',
                    verified: true,
                    activity: 54,
                    representative: {
                        name: 'Amy Elsner',
                        image: 'amyelsner.png',
                    },
                    balance: 30790,
                },
                {
                    id: 1045,
                    name: 'Fatima Saylors',
                    country: {
                        name: 'Canada',
                        code: 'ca',
                    },
                    company: 'Stanton, James D Esq',
                    date: '2019-07-10',
                    status: 'renewal',
                    verified: true,
                    activity: 93,
                    representative: {
                        name: 'Onyama Limba',
                        image: 'onyamalimba.png',
                    },
                    balance: 52343,
                },
                {
                    id: 1046,
                    name: 'Jina Briddick',
                    country: {
                        name: 'Mexico',
                        code: 'mx',
                    },
                    company: 'Grace Pastries Inc',
                    date: '2018-02-19',
                    status: 'unqualified',
                    verified: false,
                    activity: 97,
                    representative: {
                        name: 'Xuxue Feng',
                        image: 'xuxuefeng.png',
                    },
                    balance: 53966,
                },
                {
                    id: 1047,
                    name: 'Kanisha Waycott',
                    country: {
                        name: 'Ecuador',
                        code: 'ec',
                    },
                    company: 'Schroer, Gene E Esq',
                    date: '2019-11-27',
                    status: 'new',
                    verified: false,
                    activity: 80,
                    representative: {
                        name: 'Xuxue Feng',
                        image: 'xuxuefeng.png',
                    },
                    balance: 9920,
                },
                {
                    id: 1048,
                    name: 'Emerson Bowley',
                    country: {
                        name: 'Finland',
                        code: 'fi',
                    },
                    company: 'Knights Inn',
                    date: '2018-11-24',
                    status: 'new',
                    verified: false,
                    activity: 63,
                    representative: {
                        name: 'Stephen Shaw',
                        image: 'stephenshaw.png',
                    },
                    balance: 78069,
                },
                {
                    id: 1049,
                    name: 'Blair Malet',
                    country: {
                        name: 'Finland',
                        code: 'fi',
                    },
                    company: 'Bollinger Mach Shp & Shipyard',
                    date: '2018-04-19',
                    status: 'new',
                    verified: true,
                    activity: 92,
                    representative: {
                        name: 'Asiya Javayant',
                        image: 'asiyajavayant.png',
                    },
                    balance: 65005,
                },
            ],
        };
        return await fhJSON;
    }
};
__decorate([
    (0, common_1.Post)('/FHUserLog'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FHChartController.prototype, "UsersLogin", null);
__decorate([
    (0, common_1.Get)('/getFHUserAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FHChartController.prototype, "getFHUserAll", null);
__decorate([
    (0, common_1.Get)('/getFHAccountTag'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FHChartController.prototype, "getFHAccountTagList", null);
FHChartController = __decorate([
    (0, common_1.Controller)('/FHChart')
], FHChartController);
exports.FHChartController = FHChartController;
//# sourceMappingURL=FHChartController.js.map