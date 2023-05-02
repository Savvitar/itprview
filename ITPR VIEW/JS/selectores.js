    // Trigger del menu de ofcinas
    document.getElementById('menuSelect1').addEventListener('change', function() {
        var selectedOption = this.value;
        var menuList1 = document.getElementById('menuList1');

        if (selectedOption === '') {
            menuList1.classList.remove('show');
        } else {
            menuList1.classList.add('show');

        
            if (selectedOption === 'tesi') {
            window.location.href = 'TESI.html'; 
            } else if (selectedOption === 'instrumentacion') {
            window.location.href = 'TEIN.html'; 
            }
             

            if (selectedOption === 'biomedica') {
            window.location.href = 'TEBI.html'; 
            } else if (selectedOption === 'ingenieria-civil') {
            window.location.href = 'TECI.html'; 
            }

            else if (selectedOption === 'enfermeria') {
            window.location.href = 'ENFE.html';  
            } else if (selectedOption === 'adem') {
            window.location.href = 'ADEM.html'; 
            }

            else if (selectedOption === 'contabilidad') {
            window.location.href = 'CONT.html'; 
            } else if (selectedOption === 'sado') {
            window.location.href = 'SADO.html'; 
            }

            else if (selectedOption === 'electrica') {
            window.location.href = 'TELE.html'; 
            } else if (selectedOption === 'electronica') {
            window.location.href = 'TEEL.html'; 
            }

            else if (selectedOption === 'mecanica') {
            window.location.href = 'TEME.html'; 
            } else if (selectedOption === 'refrigeracion') {
            window.location.href = 'TRAA.html'; 
            }}



    });

    // Trigger del menu de Oficinas
    document.getElementById('menuSelect2').addEventListener('change', function() {
        var selectedOption = this.value;
        var menuList2 = document.getElementById('menuList2');

        if (selectedOption === '') {
            menuList2.classList.remove('show');
        } else {
            menuList2.classList.add('show');

            // If then else pa redirigir
            if (selectedOption === 'admisiones') {
                window.location.href = 'ADMI.html'; 
            }else if (selectedOption === 'registraduria') {
                window.location.href = 'REGI.html'; 
            }
            if (selectedOption === 'consejeria') {
                window.location.href = 'CONS.html'; 
            }else if (selectedOption === 'asistencia-economica') {
                window.location.href = 'ASEC.html'; 
            }
            if (selectedOption === 'colocaciones') {
                window.location.href = 'CETCo.html'; 
            }else if (selectedOption === 'biblioteca') {
                window.location.href = 'BIBL.html';
                
            }else if (selectedOption === 'ts') {
                window.location.href = 'TS.html'; 
            }}
    });

    // Trigger del menu de Oficinas
    document.getElementById('menuSelect3').addEventListener('change', function() {
        var selectedOption = this.value;
        var menuList2 = document.getElementById('menuList3');
    
        if (selectedOption === '') {
            menuList2.classList.remove('show');
        } else {
            menuList2.classList.add('show');
    
            // If then else pa redirigir
            if (selectedOption === 'biologia') {
                window.location.href = 'BIOL.html'; 
            }else if (selectedOption === 'ciso') {
                window.location.href = 'CISO.html'; 
            }
            if (selectedOption === 'espa') {
                window.location.href = 'ESPA.html'; 
            }else if (selectedOption === 'mate') {
                window.location.href = 'MATE.html'; 
            }
            if (selectedOption === 'quim') {
                window.location.href = 'QUIM.html'; 
            }else if (selectedOption === 'fisi') {
                window.location.href = 'FISI.html';
                
            }else if (selectedOption === 'ingl') {
                window.location.href = 'INGL.html'; 
            }}
    });