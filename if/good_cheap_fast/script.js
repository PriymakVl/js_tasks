const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

good.onchange = selectOptions;
cheap.onchange = selectOptions;
fast.onchange = selectOptions;

function selectOptions() {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === this) {
            fast.checked = false
        }

        if(cheap === this) {
            good.checked = false
        }

        if(fast === this) {
            cheap.checked = false
        }
    }
}