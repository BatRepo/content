export interface webhookContentDTO {
    metadata: any;
    sys: payloadSys;
    fields: any;
}

export interface payloadSys {
    type: string,
    id: string,
    space: any,
    evironment: any,
    contentType: any,
    createdBy: any,
    updatedBy: any,
    revision: number,
    createdAt: string,
    updatedAt: string
}