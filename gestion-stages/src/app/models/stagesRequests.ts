// import { StagesRequest } from './stagesRequests';
// export interface StagesRequest {
//   _id?: string;
//   createdAt: string;
//   updatedAt: string;
//   titre: string;
//   description: string;
//   startDate: string;
//   enterprise: Enterprise;
//   endDate: string;
//   program: string;
//   requirements: string;
//   stageType: StageType;
//   hoursPerWeek: number;
//   additionalInfo: string;
//   paid: boolean;
//   published: boolean;
//   skills: Skills;
//   active: boolean;
//   region: Region;
//   activitySector: string;
//   city: string;
//   resume: string;
// }



// export interface Enterprise{
//   _id: string;
//   postalCode: string;
//   createdAt: string;
//   updatedAt: string;
//   name: string;
//   description: string;
//   imageUrl: string;
//   contactName: string;
//   contactEmail: string;
//   contactPhone: string;
//   address: string;
//   city: string;
//   province: string;
//   published: boolean;

// }

// export interface StageType{
//   __typename: string;
//     label: string;
//     value: string;
// }

// export interface Skills{
//   __typename: string;
//     label: string;
//     value: string;
// }

// export interface Region{
//   __typename: string;
//     label: string;
//     value: string;
// }


export interface StagesRequest {
  _id: string;
  createdAt: string;
  updatedAt: string;
  titre: string;
  description: string;
  startDate: string;
  enterprise: {
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
    published: boolean;
  };
  endDate: string;
  program: string;
  requirements: string;
  stageType: {
    __typename: string;
    label: string;
    value: string;
  };
  hoursPerWeek: number;
  additionalInfo: string;
  paid: boolean;
  published: boolean;
  skills: {
    __typename: string;
    label: string;
    value: string;
  };
  active: boolean;
  region: {
    __typename: string;
    label: string;
    value: string;
  };
  activitySector: string;
  city: string;
  resume: string;
}
