import Employee from '@src/models/Employee';

export interface IDashboardCounter {
  employees: number;
}

export default class Counter {
  public static async forDashboard(): Promise<IDashboardCounter> {
    const promises = [Employee.count()];
    const counts = await Promise.all(promises);
    return {
      employees: counts[0],
    };
  }
}
