
// export interface ApiResponse<T> {
//   success: boolean;
//   data: T;
//   error?: string;
// }




export interface DemandeStage {
   _id: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  titre: string;
  startDate: string;
  endDate:string;
  program: string;
  requirements: string;
  hoursPerWeek: number;
  region: string;
  additionalInfo: string;
  paid: boolean;
  published: boolean;
  active: boolean;
  activitySector: string;
  stageType: string;


}
