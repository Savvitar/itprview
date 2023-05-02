    // JavaScript for handling menu triggering for Tecnologias
    document.getElementById('menuSelect1').addEventListener('change', function() {
        var selectedOption = this.value;
        var menuList1 = document.getElementById('menuList1');

        if (selectedOption === '') {
            menuList1.classList.remove('show');
        } else {
            menuList1.classList.add('show');
        }
    });

    // JavaScript for handling menu triggering for Oficinas
    document.getElementById('menuSelect2').addEventListener('change', function() {
        var selectedOption = this.value;
        var menuList2 = document.getElementById('menuList2');

        if (selectedOption === '') {
            menuList2.classList.remove('show');
        } else {
            menuList2.classList.add('show');
        }
    });