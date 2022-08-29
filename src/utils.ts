export const formatDate = (isoDate: string) =>
  new Date(isoDate).toISOString().split('T').at(0)
