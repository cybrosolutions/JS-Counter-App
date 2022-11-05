let count = 0;

const increment = () => {
    count++;
    document.getElementById('counter').innerHTML = `${count}`;
}

const decrement = () => {
    if(count >= 1){
        count--;
    document.getElementById('counter').innerHTML = `${count}`;
    }
}

const save = () => {
    count;
    document.getElementById('save').innerHTML += ` ${count} -`;
    document.getElementById('counter').innerHTML = 0;
    count = 0;
}

