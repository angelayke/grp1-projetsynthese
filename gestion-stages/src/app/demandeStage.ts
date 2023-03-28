
// export interface ApiResponse<T> {
//   success: boolean;
//   data: T;
//   error?: string;
// }



export interface DemandeStage {
   _id: string;
   createdAt: string;
   updatedAt: string;
   description: string;
  titre: string;
  startDate: string;
  enterprise:{
    _id: string;
    postalCode: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    description: string;
    imageUrl: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    address: string;
    city: string;
    province: string;
    published: true;
  },
  endDate:string;
  program: string;
  requirements: string;
  stageType: {

    __typename: string;
      label: string;
      value: string;

  },
  hoursPerWeek: number;
  additionalInfo: string;
  paid: boolean;
  published: boolean;
  skills: {
    __typename: string;
    label: string;
    value: string;
  },
  active: boolean;
  region: {
    __typename: string;
    label: string;
    value: string;

  },
    activitySector: string;
    city: string;
    resume: string;

}
