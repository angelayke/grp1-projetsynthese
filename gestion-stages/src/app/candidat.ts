export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: string;
  }
  
  
  export interface Candidat {
  
      _id: string,
      email: string,
      createdAt: string,
      updatedAt: string,
      province: string,
      jobTitle: string,
      postalCode: string,
      city: string,
      name: string,
      description: string,
      address: string,
      published: boolean,
      phone: string
  
  }