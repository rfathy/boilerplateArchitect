// OnlyEn directive
export const onlyEn = {
    bind(el) {
        el.addEventListener('keypress', e => {
            var key = e.which; //firefox

            if (key > 128 || (key > 47 && key < 58)) {
                e.preventDefault();
                return false;
            } else {
                if (key !== 35 && key !== 38) {
                    return;
                } else {
                    e.preventDefault();
                    return false;
                }
            }
        });
    }
};

// OnlyAr directive
export const onlyAr = {
    bind(el) {
        el.addEventListener('keypress', function(e) {
            let key = e.which;

            if (key !== 32 && key < 128 && key != 13) {
                e.preventDefault();
                //return false;
            } else {
                return;
            }
        });
    }
};

// stopPasteEn directive
export const stopPasteEn = {
    bind(el, binding) {
        el.addEventListener('paste', function(e) {
            let item = (e.clipboardData || window.clipboardData).getData(
                'text'
            );
            ////gets the paste value in the input
            item.getAsString(function() {
                el.value = binding.value.replace(
                    /[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF-#&0-9]/g,
                    ''
                );
                el.value = binding.value.trim();
                // $scope.$apply();
            });
        });
    }
};

//Only numbers
export const onlyNumeric = {
    bind(el) {
        el.addEventListener('keypress', function(e) {
            if(!(e.keyCode >= 48 && e.keyCode <= 57)){
                e.preventDefault();
            }
            else{
                return;
            }
        });
    }    
};

//allow decimal
//Only numbers
export const allowDecimal = {
    bind(el, binding) {
        el.addEventListener('keypress', function(e) {
            if(e.keyCode > 31 && (e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 46){
                e.preventDefault();
            }
            else if(el.value.indexOf(".") != -1 && e.keyCode == 46){ // allows only one (.)
                e.preventDefault();
            }
            else{
                let val =  parseInt(binding.value)-1
                let regexp = "^\\d*(\\.\\d{0," + val + "})?$";
                let rgx = new RegExp(regexp);
                if(!rgx.test(el.value)){
                    e.preventDefault();
                }
                return;
            }
        });
    }
    
};



// var ex = /^\d*\.$/;
// console.log(ex.test(el.value) + " - " + el.value);
// if(ex.test(el.value)==false){
//     el.value = el.value.substring(0,el.value.length - 1);
// }