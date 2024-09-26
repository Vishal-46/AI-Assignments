document.getElementById('forwardExampleBtn').addEventListener('click', function() {
    const forwardExample = document.getElementById('forwardExample');
    forwardExample.style.display = 'block';
    forwardExample.innerHTML = `
        <p>Step 1: We know that the animal has feathers.</p>
        <p>Step 2: According to the rule, if the animal has feathers, it is a bird.</p>
        <p>Step 3: Therefore, the system concludes that the animal is a bird.</p>
    `;
});

document.getElementById('backwardExampleBtn').addEventListener('click', function() {
    const backwardExample = document.getElementById('backwardExample');
    backwardExample.style.display = 'block';
    backwardExample.innerHTML = `
        <p>Step 1: We want to know if the patient should be hospitalized.</p>
        <p>Step 2: The rule says that if the patient is in critical condition, they should be hospitalized.</p>
        <p>Step 3: Now, we check if the patient has difficulty breathing and a high heart rate to confirm.</p>
    `;
});
