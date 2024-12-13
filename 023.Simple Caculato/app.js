document.getElementById('btn').addEventListener('click', function () {
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    let result = document.querySelector('.result');
    let selectOp = document.getElementById('selectOp').value;

    // Kiểm tra đầu vào hợp lệ
    if (isNaN(num1) || isNaN(num2)) {
        result.innerHTML = "Invalid input. Please enter valid numbers.";
        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    switch (selectOp) {
        case 'plus':
            result.innerHTML = num1 + num2;
            break;
        case 'min':
            result.innerHTML = num1 - num2;
            break;
        case 'dev':
            if (num2 === 0) {
                result.innerHTML = "Cannot divide by zero.";
            } else {
                result.innerHTML = num1 / num2;
            }
            break;
        case 'multi':
            result.innerHTML = num1 * num2;
            break;
        default:
            result.innerHTML = "Invalid operation.";
    }
});
