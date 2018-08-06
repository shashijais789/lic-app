export class Feedback {

    constructor(
        public policyId: number,
        public firstName: string,
        public lastName: string,
        public isPortalUsed: boolean,
        public isOLRKnown: boolean,
        public serviceRating: number,
        public recomendationRating: number,
        public experienceDesc: string
    ){ }
    
}