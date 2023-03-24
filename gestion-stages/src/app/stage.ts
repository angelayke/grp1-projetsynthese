export interface Stage {
    _id?: string;
    description: string;
    createdAt?: string;
    updatedAt?: string;
    title: string;
    startDate: string;
    endDate:string;
    program: string;
    region?: string;
    requirements: string;
    stageType?: string
    hoursPerWeek: number;
    additionalInfo: string;
    paid: boolean;
    published?: boolean;
    active?: boolean;
    activitySector?: string;
    enterprise: string; // (ajouté & modifié par Tamanaco...)
  }

