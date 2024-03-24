
//net salary calculator
function calculateNetSalary(basicSalary, benefits) {
    //  tax calculation
    const nhifRate = 0.02; // NHIF 
    const nssfRate = 0.06; // NSSF 
    const taxBands = [12298, 23885, 35472, 47059]; // KRA tax bands
    const taxRates = [0.10, 0.15, 0.20, 0.25]; // tax rates
}
    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE tax
    let taxableIncome = grossSalary;
    let payeTax = 0;
        if (taxableIncome > taxBands){
            payeTax += taxBands* taxRates;
            taxableIncome -= taxBands;
        } else {
            payeTax += taxableIncome * taxRates;
            break;
        }

    // Calculate NHIF deductions
    let nhifDeductions = basicSalary * nhifRate;

    // Calculate NSSF deductions
    let nssfDeductions = basicSalary * nssfRate;

    // Calculate net salary
    let netSalary = grossSalary - payeTax - nhifDeductions - nssfDeductions;

    return netSalary;
    calculateNetSalary()
