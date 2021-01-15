export enum ApplicationType {
  nest = 'nest',
}
export interface ApplicationGeneratorSchema {
  name: string
  tags?: string
  directory?: string
  type?: ApplicationType
}
