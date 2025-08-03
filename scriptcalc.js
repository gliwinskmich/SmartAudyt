const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Zamknij menu po kliknięciu na link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Animacja przy przewijaniu
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.contact-form');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.animation = 'fadeInUp 0.5s ease forwards';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

document.addEventListener('DOMContentLoaded', function() {
    // Poziom dofinansowania i działalność gospodarcza
    const fundingLevel = document.getElementById('funding-level');
    const businessActivity = document.getElementById('business-activity');
    const businessAreaFields = document.getElementById('business-area-fields'); 
    const totalArea = document.getElementById('total-area');
    const businessArea = document.getElementById('business-area');
    const businessPercentage = document.getElementById('business-percentage');
    const clearBtn = document.getElementById('clear-btn');
    
    // Źródło ciepła
    const heatSourceChange = document.getElementById('heat-source-change');
    const heatSourceFields = document.getElementById('heat-source-fields');
    const heatSourceType = document.getElementById('heat-source-type');
    const heatSourceCostField = document.getElementById('heat-source-cost-field');
    const heatSourceCost = document.getElementById('heat-source-cost');
    const additionalHeatSourceField = document.getElementById('additional-heat-source-field');
    const additionalHeatSource = document.getElementById('additional-heat-source');
    const additionalHeatSourceCostField = document.getElementById('additional-heat-source-cost-field');
    const additionalHeatSourceCost = document.getElementById('additional-heat-source-cost');
    
    // Instalacja c.o. c.w.u.    
    const modernizationSection = document.getElementById('modernization-section');
    const modernization = document.getElementById('modernization');
    const modernizationCostField = document.getElementById('modernization-cost-field');
    const modernizationCost = document.getElementById('modernization-cost');
    
    // Ocieplenie
    // Dach
    const roofInsulation = document.getElementById('roof-insulation');
    const roofInsulationFields = document.getElementById('roof-insulation-fields');
    const roofInsulationCost = document.getElementById('roof-insulation-cost');
    const roofInsulationArea = document.getElementById('roof-insulation-area');
    // Podłoga
    const floorInsulation = document.getElementById('floor-insulation');
    const floorInsulationFields = document.getElementById('floor-insulation-fields');
    const floorInsulationCost = document.getElementById('floor-insulation-cost');
    const floorInsulationArea = document.getElementById('floor-insulation-area');
    // Ściany
    const wallInsulation = document.getElementById('wall-insulation');
    const wallInsulationFields = document.getElementById('wall-insulation-fields');
    const wallInsulationCost = document.getElementById('wall-insulation-cost');
    const wallInsulationArea = document.getElementById('wall-insulation-area');
    
    // Okna
    const windows = document.getElementById('windows');
    const windowsFields = document.getElementById('windows-fields');
    const windowsCost = document.getElementById('windows-cost');
    const windowsArea = document.getElementById('windows-area');
    
    // Drzwi
    const doors = document.getElementById('doors');
    const doorsFields = document.getElementById('doors-fields');
    const doorsCost = document.getElementById('doors-cost');
    const doorsArea = document.getElementById('doors-area');
    
    // Brama
    const garageDoors = document.getElementById('garage-doors');
    const garageDoorsFields = document.getElementById('garage-doors-fields');
    const garageDoorsCost = document.getElementById('garage-doors-cost');
    const garageDoorsArea = document.getElementById('garage-doors-area');
    
    // Rekuperacja
    const ventilation = document.getElementById('ventilation');
    const ventilationCostField = document.getElementById('ventilation-cost-field');
    const ventilationCost = document.getElementById('ventilation-cost');
    const ventilationArea = 1.0;
    
    // Audyt
    const audit = document.getElementById('audit');
    const auditCostField = document.getElementById('audit-cost-field');
    const auditCost = document.getElementById('audit-cost');
    
    // Świadectwo
    const energyCertificate = document.getElementById('energy-certificate');
    const energyCertificateCostField = document.getElementById('energy-certificate-cost-field');
    const energyCertificateCost = document.getElementById('energy-certificate-cost');
    
    // Przycisk i reakcja
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');
    const note = document.getElementById('note');
    const errorMessageDiv = document.getElementById('error-message');
    
    // Sekcja pomocy
    const helpCheckbox = document.getElementById('help');
    const pomocDiv = document.getElementById('pomoc');
    const gospodarstwoSelect = document.getElementById('gospodarstwo');
    const jednoosoboweContainer = document.getElementById('jednoosobowe-container');
    const jednoosoboweSelect = document.getElementById('jednoosobowe');
    const wieloosoboweContainer = document.getElementById('wieloosobowe-container');
    const wieloosoboweSelect = document.getElementById('wieloosobowe');
    const wskaznikContainer = document.getElementById('wskaznik-container');
    const wskaznikSelect = document.getElementById('wskaznik');
    const resultDiv2 = document.getElementById('result2');
    const resultText = document.getElementById('result-text');
    const additionalInfo = document.getElementById('additional-info');
    
    // Sekcja audytu
    const checkAudit = document.getElementById('check-audit');
    const wskaznikAudyt = document.getElementById('wskaznik-audyt');
    const wskaznik2 = document.getElementById('wskaznik2');
    const termoElements = document.querySelectorAll('.termo');
    
    // Obsługa checkboxa audytu
    checkAudit.addEventListener('change', function() {
        wskaznikAudyt.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            resetAuditSettings();
        } else {
            wskaznik2.selectedIndex = 0;
        }
    });
    
    // Obsługa zmian w selektorze wskaznik2
    wskaznik2.addEventListener('change', function() {
        const value = this.value;
        
        // Resetujemy ustawienia audytu przy każdej zmianie
        //resetAuditSettings();
        
        if (value === '1') {
            // Ukrywamy wszystkie elementy termomodernizacji
            termoElements.forEach(el => el.classList.add('hidden'));
            // Blokujemy poziom najwyższy
            fundingLevel.querySelector('option[value="1"]').disabled = true;
            if (fundingLevel.value === '1') {
                fundingLevel.value = '0.7';
            }
        } else if (value === '2') {
            termoElements.forEach(el => el.classList.remove('hidden'));
            // Blokujemy poziom najwyższy
            fundingLevel.querySelector('option[value="1"]').disabled = true;
            if (fundingLevel.value === '1') {
                fundingLevel.value = '0.7';
            }
        } else if (value === '3') {
            // Przywracamy domyślne ustawienia
            termoElements.forEach(el => el.classList.remove('hidden'));
            fundingLevel.querySelector('option[value="1"]').disabled = false;
        }
    });
    
    // Funkcja resetująca ustawienia audytu
    function resetAuditSettings() {
        termoElements.forEach(el => el.classList.remove('hidden'));
        fundingLevel.querySelector('option[value="1"]').disabled = false;
        wskaznik2.selectedIndex = 0;
    }
    
    // Obsługa checkboxa pomocy
    helpCheckbox.addEventListener('change', function() {
        pomocDiv.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            resetAllHelp();
        }
    });
    
    // Funkcja resetująca tylko pola jednoosobowe/wieloosobowe i wskaźnik
    function resetIncomeAndWskaznik() {
        jednoosoboweSelect.selectedIndex = 0;
        wieloosoboweSelect.selectedIndex = 0;
        wskaznikContainer.classList.add('hidden');
        wskaznikSelect.selectedIndex = 0;
        resultDiv2.classList.add('hidden');
    }
    
    // Reset wszystkich selektorów pomocy
    function resetAllHelp() {
        gospodarstwoSelect.selectedIndex = 0;
        resetIncomeAndWskaznik();
    }
    
    // Obsługa zmian w selektorze gospodarstwa
    gospodarstwoSelect.addEventListener('change', function() {
        const value = this.value;
        
        // Najpierw zresetuj poprzednie wybory
        resetIncomeAndWskaznik();
        
        if (value === '1') {
            jednoosoboweContainer.classList.remove('hidden');
            wieloosoboweContainer.classList.add('hidden');
        } else if (value === '2') {
            wieloosoboweContainer.classList.remove('hidden');
            jednoosoboweContainer.classList.add('hidden');
        }
    });
    
    // Handle changes in jednoosobowe select
    jednoosoboweSelect.addEventListener('change', function() {
        handleIncomeChange('jednoosobowe');
    });
    
    // Handle changes in wieloosobowe select
    wieloosoboweSelect.addEventListener('change', function() {
        handleIncomeChange('wieloosobowe');
    });
    
    // Handle changes in wskaznik select
    wskaznikSelect.addEventListener('change', function() {
        calculateResult();
    });
    
    function handleIncomeChange(type) {
        // Reset wskaznik container and select
        wskaznikContainer.classList.add('hidden');
        wskaznikSelect.selectedIndex = 0;
        resultDiv2.classList.add('hidden');
        
        const select = type === 'jednoosobowe' ? jednoosoboweSelect : wieloosoboweSelect;
        if (select.value === '1') {
            wskaznikContainer.classList.remove('hidden');
        } else {
            calculateResult();
        }
    }
    
    function calculateResult() {
        const gospodarstwo = gospodarstwoSelect.value;
        let incomeValue, wskaznikValue;
        
        if (gospodarstwo === '1') {
            incomeValue = jednoosoboweSelect.value;
        } else if (gospodarstwo === '2') {
            incomeValue = wieloosoboweSelect.value;
        } else {
            return;
        }
        
        // Check if we need to wait for wskaznik selection
        if (incomeValue === '1' && wskaznikSelect.value === '0') {
            resultDiv2.classList.add('hidden');
            return;
        }
        
        // Get wskaznik value if needed
        if (incomeValue === '1') {
            wskaznikValue = wskaznikSelect.value;
        }
        
        // Determine the result
        let level, info;
        
        if (incomeValue === '3') {
            level = 'Podstawowy';
            info = 'Pamiętaj, że suma rocznych dochodów wnioskodawcy nie może przekraczać 135 000 zł.';
        } else if (incomeValue === '2') {
            level = 'Podwyższony';
            if(gospodarstwoSelect.value == '1') {
                info = 'Pamiętaj, że jeżeli wnioskodawca prowadzi działalność gospodarczą i przychód z działalności przekracza czterdziestokrotność minimalnego wynagrodzenia, przysługuje poziom podstawowy i należy go zmienić ręcznie do obliczeń.';
                } else info = 'Pamiętaj, że jeżeli wnioskodawca lub współmałżonek prowadzi działalność gospodarczą i przychód z działalności przekracza czterdziestokrotność minimalnego wynagrodzenia, przysługuje poziom podstawowyi należy go zmienić ręcznie do obliczeń.'

        } else if (incomeValue === '1') {
            if (wskaznikValue === '1') {
                level = 'Najwyższy';
                if(gospodarstwoSelect.value == '1') {
                    info = 'Pamiętaj, że jeżeli wnioskodawca prowadzi działalność gospodarczą i przychód z działalności przekracza dwunastokrotność minimalnego wynagrodzenia, przysługuje poziom podwyższony, a jeżeli przekracza czterdziestokrotność, przysługuje poziom podstawowy i należy go zmienić ręcznie do obliczeń.';
                } else info = 'Pamiętaj, że jeżeli wnioskodawca lub współmałżonek prowadzi działalność gospodarczą i przychód z działalności przekracza dwunastokrotność minimalnego wynagrodzenia, przysługuje poziom podwyższony, a jeżeli przekracza czterdziestokrotność, przysługuje poziom podstawowy i należy go zmienić ręcznie do obliczeń.'
            } else if (wskaznikValue === '2') {
                level = 'Podwyższony';
                if(gospodarstwoSelect.value == '1') {
                info = 'Pamiętaj, że jeżeli wnioskodawca prowadzi działalność gospodarczą i przychód z działalności przekracza czterdziestokrotność minimalnego wynagrodzenia, przysługuje poziom podstawowy i należy go zmienić ręcznie do obliczeń.';
                } else info = 'Pamiętaj, że jeżeli wnioskodawca lub współmałżonek prowadzi działalność gospodarczą i przychód z działalności przekracza czterdziestokrotność minimalnego wynagrodzenia, przysługuje poziom podstawowyi należy go zmienić ręcznie do obliczeń.'
            }
                    resetAuditSettings();
        checkAudit.checked = false;
        }
        
        // Display the result
        resultText.textContent = `${level} poziom dofinansowania`;
        additionalInfo.textContent = info;
        additionalInfo.classList.remove('hidden');
        resultDiv2.classList.remove('hidden');
        
        // Automatically set the funding level in the main form
        if (level === 'Podstawowy') {
            fundingLevel.value = '0.4';
        } else if (level === 'Podwyższony') {
            fundingLevel.value = '0.7';
        } else if (level === 'Najwyższy') {
                fundingLevel.value = '1';
            } 
        
    }
    
    // Obsługa zdarzeń
    businessActivity.addEventListener('change', function() {
        businessAreaFields.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            totalArea.value = '';
            businessArea.value = '';
            businessPercentage.classList.add('hidden');
        }
    });

    function clearForm() {
        console.clear();

        // Reset póla formularza (działalność, źródło, instalacja)
        fundingLevel.value = '0';
        
        businessActivity.checked = false;
        businessAreaFields.classList.add('hidden');
        totalArea.value = '';
        businessArea.value = '';
        businessPercentage.classList.add('hidden');
        
        heatSourceChange.checked = false;
        heatSourceFields.classList.add('hidden');
        heatSourceType.value = '0';
        heatSourceCostField.classList.add('hidden');
        heatSourceCost.value = '';
        additionalHeatSourceField.classList.add('hidden');
        additionalHeatSource.checked = false;
        additionalHeatSourceCostField.classList.add('hidden');
        additionalHeatSourceCost.value = '';
        
        modernizationSection.classList.add('hidden');
        modernization.checked = false;
        modernizationCostField.classList.add('hidden');
        modernizationCost.value = '';
        
        // Reset pól dla ociepleń i stolarki
        const areaBasedFields = [
            { checkbox: roofInsulation, fields: roofInsulationFields, cost: roofInsulationCost, area: roofInsulationArea },
            { checkbox: floorInsulation, fields: floorInsulationFields, cost: floorInsulationCost, area: floorInsulationArea },
            { checkbox: wallInsulation, fields: wallInsulationFields, cost: wallInsulationCost, area: wallInsulationArea },
            { checkbox: windows, fields: windowsFields, cost: windowsCost, area: windowsArea },
            { checkbox: doors, fields: doorsFields, cost: doorsCost, area: doorsArea },
            { checkbox: garageDoors, fields: garageDoorsFields, cost: garageDoorsCost, area: garageDoorsArea }
        ];
        
        areaBasedFields.forEach(field => {
            field.checkbox.checked = false;
            field.fields.classList.add('hidden');
            field.cost.value = '';
            field.area.value = '';
        });
        
        // Resetowanie pozostałych pól
        ventilation.checked = false;
        ventilationCostField.classList.add('hidden');
        ventilationCost.value = '';
        
        audit.checked = false;
        auditCostField.classList.add('hidden');
        auditCost.value = '';
        
        energyCertificate.checked = false;
        energyCertificateCostField.classList.add('hidden');
        energyCertificateCost.value = '';
        
        // Reset sekcji audytu
        checkAudit.checked = false;
        wskaznikAudyt.classList.add('hidden');
        wskaznik2.selectedIndex = 0;
        resetAuditSettings();
        
        // Ukrywanie komunikatów o błędach
        document.querySelectorAll('.error').forEach(el => el.classList.add('hidden'));
        errorMessageDiv.classList.add('hidden');
        resultDiv.classList.add('hidden');
        note.classList.add('hidden');

        // Reset sekcji pomocy
        helpCheckbox.checked = false;
        pomocDiv.classList.add('hidden');
        resetAllHelp();

        // Funkcja opóźniająca scroll-up z powodu konfliktu funkcji w niektórych przeglądarkach
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 50);
    }

    // Przycisk resetu
    clearBtn.addEventListener('click', clearForm);   
    heatSourceChange.addEventListener('change', function() {
        heatSourceFields.classList.toggle('hidden', !this.checked);
        modernizationSection.classList.toggle('hidden', !this.checked);
    });
    
    heatSourceType.addEventListener('change', function() {
        const selectedValue = this.value;
        heatSourceCostField.classList.toggle('hidden', selectedValue === '0');
        additionalHeatSourceField.classList.toggle('hidden', selectedValue !== '45000');
        
        if (selectedValue === '0') {
            heatSourceCost.value = '';
            modernizationSection.classList.add('hidden');
            modernization.checked = false;
            modernizationCostField.classList.add('hidden');
            modernizationCost.value = '';
        } else {
            modernizationSection.classList.remove('hidden');
        }
        
        if (selectedValue !== '45000') {
            additionalHeatSource.checked = false;
            additionalHeatSourceCostField.classList.add('hidden');
            additionalHeatSourceCost.value = '';
        }
    });
    
    additionalHeatSource.addEventListener('change', function() {
        additionalHeatSourceCostField.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            additionalHeatSourceCost.value = '';
        }
    });
    
    // Obsługa zdarzeń dla pozostałych checkboxów
    modernization.addEventListener('change', function() {
        modernizationCostField.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            modernizationCost.value = '';
        }
    });
    
    roofInsulation.addEventListener('change', function() {
        roofInsulationFields.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            roofInsulationCost.value = '';
            roofInsulationArea.value = '';
        }
    });
    
    floorInsulation.addEventListener('change', function() {
        floorInsulationFields.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            floorInsulationCost.value = '';
            floorInsulationArea.value = '';
        }
    });
    
    wallInsulation.addEventListener('change', function() {
        wallInsulationFields.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            wallInsulationCost.value = '';
            wallInsulationArea.value = '';
        }
    });
    
    windows.addEventListener('change', function() {
        windowsFields.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            windowsCost.value = '';
            windowsArea.value = '';
        }
    });
    
    doors.addEventListener('change', function() {
        doorsFields.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            doorsCost.value = '';
            doorsArea.value = '';
        }
    });
    
    garageDoors.addEventListener('change', function() {
        garageDoorsFields.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            garageDoorsCost.value = '';
            garageDoorsArea.value = '';
        }
    });
    
    ventilation.addEventListener('change', function() {
        ventilationCostField.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            ventilationCost.value = '';
        }
    });
    
    audit.addEventListener('change', function() {
        auditCostField.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            auditCost.value = '';
        }
    });
    
    energyCertificate.addEventListener('change', function() {
        energyCertificateCostField.classList.toggle('hidden', !this.checked);
        if (!this.checked) {
            energyCertificateCost.value = '';
        }
    });
    
    // Obsługa zmian w polach powierzchni dla działalności gospodarczej
    totalArea.addEventListener('input', calculateBusinessPercentage);
    businessArea.addEventListener('input', calculateBusinessPercentage);
    
    function calculateBusinessPercentage() {
        const total = parseFloat(totalArea.value);
        const business = parseFloat(businessArea.value);
        
        if (isNaN(total) || isNaN(business)) {
            businessPercentage.classList.add('hidden');
            return;
        }
        
        if (business > total) {
            businessArea.setCustomValidity('Powierzchnia działalności nie może być większa niż powierzchnia całkowita');
            businessPercentage.classList.add('hidden');
            return;
        } else {
            businessArea.setCustomValidity('');
        }
        
        const percentage = (business / total) * 100;
        businessPercentage.classList.remove('hidden');
        
        if (percentage <= 30) {
            businessPercentage.innerHTML = `Działalność gospodarcza stanowi ${percentage.toFixed(2)}% powierzchni całkowitej budynku`;
            businessPercentage.style.color = '';
        } else {
            businessPercentage.innerHTML = `<span style="color: #e6e6e6;">Powierzchnia działalności przekracza 30% powierzchni całkowitej budynku</span>`;
        }
    }
    
    // Walidacja
    function validateForm() {
        let isValid = true;
        errorMessageDiv.classList.add('hidden');
        errorMessageDiv.textContent = '';
        
        // Sprawdź poziom dofinansowania
        if (fundingLevel.value === '0') {
            isValid = false;
            errorMessageDiv.textContent += 'Wybierz poziom dofinansowania.\n';
        }
        
        // Sprawdź pola działalności gospodarczej
        if (businessActivity.checked) {
            if (!totalArea.value || parseFloat(totalArea.value) <= 0) {
                isValid = false;
                document.getElementById('total-area-error').classList.remove('hidden');
                errorMessageDiv.textContent += 'Podaj poprawną powierzchnię całkowitą budynku.\n';
            } else {
                document.getElementById('total-area-error').classList.add('hidden');
            }
            
            if (!businessArea.value || parseFloat(businessArea.value) <= 0) {
                isValid = false;
                document.getElementById('business-area-error').classList.remove('hidden');
                errorMessageDiv.textContent += 'Podaj poprawną powierzchnię działalności.\n';
            } else {
                document.getElementById('business-area-error').classList.add('hidden');
            }
            
            if (parseFloat(businessArea.value) > parseFloat(totalArea.value)) {
                isValid = false;
                errorMessageDiv.textContent += 'Powierzchnia działalności nie może być większa niż powierzchnia całkowita.\n';
            }
        }
        
        if (heatSourceChange.checked) {
            if (heatSourceType.value === '0') {
                isValid = false;
                errorMessageDiv.textContent += 'Wybierz nowe źródło ciepła.\n';
            }
            
            if (!heatSourceCost.value || parseFloat(heatSourceCost.value) < 0) {
                isValid = false;
                document.getElementById('heat-source-cost-error').classList.remove('hidden');
                errorMessageDiv.textContent += 'Podaj poprawny koszt źródła ciepła.\n';
            } else {
                document.getElementById('heat-source-cost-error').classList.add('hidden');
            }
            
            if (additionalHeatSource.checked && (!additionalHeatSourceCost.value || parseFloat(additionalHeatSourceCost.value) < 0)) {
                isValid = false;
                document.getElementById('additional-heat-source-cost-error').classList.remove('hidden');
                errorMessageDiv.textContent += 'Podaj poprawny koszt dolnego źródła ciepła.\n';
            } else {
                document.getElementById('additional-heat-source-cost-error').classList.add('hidden');
                document.getElementById('modernization-section').classList.remove('hidden');
            }
        }
        
        if (modernization.checked && (!modernizationCost.value || parseFloat(modernizationCost.value) < 0)) {
            isValid = false;
            document.getElementById('modernization-cost-error').classList.remove('hidden');
            errorMessageDiv.textContent += 'Podaj poprawny koszt modernizacji instalacji.\n';
        } else {
            document.getElementById('modernization-cost-error').classList.add('hidden');
        }
        
        const checkFields = [
            { checkbox: roofInsulation, cost: roofInsulationCost, area: roofInsulationArea, costError: 'roof-insulation-cost-error', areaError: 'roof-insulation-area-error', name: 'ocieplenia stropów' },
            { checkbox: floorInsulation, cost: floorInsulationCost, area: floorInsulationArea, costError: 'floor-insulation-cost-error', areaError: 'floor-insulation-area-error', name: 'ocieplenia podłóg' },
            { checkbox: wallInsulation, cost: wallInsulationCost, area: wallInsulationArea, costError: 'wall-insulation-cost-error', areaError: 'wall-insulation-area-error', name: 'ocieplenia ścian' },
            { checkbox: windows, cost: windowsCost, area: windowsArea, costError: 'windows-cost-error', areaError: 'windows-area-error', name: 'stolarki okiennej' },
            { checkbox: doors, cost: doorsCost, area: doorsArea, costError: 'doors-cost-error', areaError: 'doors-area-error', name: 'stolarki drzwiowej' },
            { checkbox: garageDoors, cost: garageDoorsCost, area: garageDoorsArea, costError: 'garage-doors-cost-error', areaError: 'garage-doors-area-error', name: 'bram garażowych' }
        ];
        
        checkFields.forEach(field => {
            if (field.checkbox.checked) {
                if (!field.cost.value || parseFloat(field.cost.value) < 0) {
                    isValid = false;
                    document.getElementById(field.costError).classList.remove('hidden');
                    errorMessageDiv.textContent += `Podaj poprawny koszt ${field.name}.\n`;
                } else {
                    document.getElementById(field.costError).classList.add('hidden');
                }
                
                if (!field.area.value || parseFloat(field.area.value) <= 0) {
                    isValid = false;
                    document.getElementById(field.areaError).classList.remove('hidden');
                    errorMessageDiv.textContent += `Podaj poprawną powierzchnię ${field.name}.\n`;
                } else {
                    document.getElementById(field.areaError).classList.add('hidden');
                }
            }
        });
        
        const simpleCheckFields = [
            { checkbox: ventilation, cost: ventilationCost, costError: 'ventilation-cost-error', name: 'wentylacji' },
            { checkbox: audit, cost: auditCost, costError: 'audit-cost-error', name: 'audytu' },
            { checkbox: energyCertificate, cost: energyCertificateCost, costError: 'energy-certificate-cost-error', name: 'świadectwa energetycznego' }
        ];
        
        simpleCheckFields.forEach(field => {
            if (field.checkbox.checked && (!field.cost.value || parseFloat(field.cost.value) < 0)) {
                isValid = false;
                document.getElementById(field.costError).classList.remove('hidden');
                errorMessageDiv.textContent += `Podaj poprawny koszt ${field.name}.\n`;
            } else {
                document.getElementById(field.costError).classList.add('hidden');
            }
        });
        
        if (!isValid) {
            errorMessageDiv.classList.remove('hidden');
        }
        
        return isValid;
    }
    
    // Funkcja obliczająca dotację
    function calculateGrant() {
        if (!validateForm()) {
            resultDiv.classList.add('hidden');
            return;
        }

        // Maksymalne koszty dla poszczególnych kategorii
        const maxCosts = {
            heatSource: {
                '22250': 22250, // Podłączenie do sieci ciepłowniczej wraz z przyłączem
                '31500': 31500, // Pompa ciepła powietrze/woda
                '35200': 35200, // Pompa ciepła powietrze/woda o podwyższonej klasie efektywności energetycznej
                '11200': 11200, // Pompa ciepła powietrze/powietrze
                '45000': 45000, // Gruntowa pompa ciepła (bez dolnego źródła)
                '20500': 20500 // Kotły na paliwo stałe o obniżonej emisyjności (pellet i zgazowujący drewno)
            },
            additionalHeatSource: 20000, // Dolne źródło ciepła do gruntowej pomy ciepła
            modernization: 20500, // c.o c.w.u.
            roofInsulation: 200, // dach - 1m^2
            floorInsulation: 150, // podłoga - 1m^2
            wallInsulation: 250, // ściana - 1m^2
            windows: 1200, // okna - 1m^2
            doors: 2500, // drzwi - 1m^2
            garageDoors: 1500, // brama - 1m^2
            ventilation: 16700, // wentylacja
            audit: 1200, // audyt
            energyCertificate: 400 // świadectwo
        };
        
        let totalCost = 0;
        
        // Obliczenie kosztu źródła ciepła
        if (heatSourceChange.checked) {
            const selectedHeatSource = heatSourceType.value;
            const userHeatSourceCost = parseFloat(heatSourceCost.value);
            const maxHeatSourceCost = maxCosts.heatSource[selectedHeatSource] || 0;
            
            totalCost += Math.min(userHeatSourceCost, maxHeatSourceCost);
            console.log("Koszt kwalifikowany źródła ciepła: " + Math.min(userHeatSourceCost, maxHeatSourceCost) + " zł");
            // Dodaj koszt dolnego źródła ciepła jeśli zaznaczono gruntową pompę ciepła
            if (additionalHeatSource.checked) {
                const userAdditionalCost = parseFloat(additionalHeatSourceCost.value);
                totalCost += Math.min(userAdditionalCost, maxCosts.additionalHeatSource);
                console.log("Koszt kwalifikowany dolnego źródło ciepła: " + Math.min(userAdditionalCost, maxCosts.additionalHeatSource) + " zł");
            }
        }
        
        // Obliczenie kosztu modernizacji instalacji
        if (modernization.checked) {
            const userModernizationCost = parseFloat(modernizationCost.value);
            totalCost += Math.min(userModernizationCost, maxCosts.modernization);
            console.log("Koszt kwalifikowany instalacji c.o. lub c.w.u.: " + Math.min(userModernizationCost, maxCosts.modernization) + " zł");
        }
        
        // Obliczenie kosztyu pozostałych kategorii
        const areaBasedFields = [
            { checkbox: roofInsulation, cost: roofInsulationCost, area: roofInsulationArea, max: maxCosts.roofInsulation },
            { checkbox: floorInsulation, cost: floorInsulationCost, area: floorInsulationArea, max: maxCosts.floorInsulation },
            { checkbox: wallInsulation, cost: wallInsulationCost, area: wallInsulationArea, max: maxCosts.wallInsulation },
            { checkbox: windows, cost: windowsCost, area: windowsArea, max: maxCosts.windows },
            { checkbox: doors, cost: doorsCost, area: doorsArea, max: maxCosts.doors },
            { checkbox: garageDoors, cost: garageDoorsCost, area: garageDoorsArea, max: maxCosts.garageDoors },
        ];
        
        let areaBasedTotal = 0;
        
        areaBasedFields.forEach(field => {
            if (field.checkbox.checked) {
                const userCost = parseFloat(field.cost.value);
                const area = parseFloat(field.area.value);
                const maxCostPerM2 = field.max;
                
                areaBasedTotal += Math.min(userCost, maxCostPerM2 * area);
                console.log(" >> podany cząstkowy koszt termomodernizacji (ocieplenie lub stolarka): " + Math.min(userCost, maxCostPerM2 * area) + " zł");
            }
        });

        if (ventilation.checked) {
            const userCost = parseFloat(ventilationCost.value);
            areaBasedTotal += Math.min(userCost, maxCosts.ventilation);
            console.log(" >> podany cząstkowy koszt termomodernizacji (wentylacja mechaniczna): " + Math.min(userCost, maxCosts.ventilation) + " zł");
        }
        
        // Uwzględnienie specjalnych warunków dla audytu
        let termoMaxAmount = 83000;
        if (checkAudit.checked && wskaznik2.value === '2') {
            const fundingRate = parseFloat(fundingLevel.value);
            if (fundingRate === 0.4) {
                termoMaxAmount = 19200 / 0.4; // 19200 to maksymalna dotacja, więc maksymalny koszt to 19200/0.4
            } else if (fundingRate === 0.7) {
                termoMaxAmount = 33600 / 0.7; // 33600 to maksymalna dotacja, więc maksymalny koszt to 33600/0.7
            }
        }
        
        // Ograniczenie sumy kosztów termo do termoMaxAmount zł
        totalCost += Math.min((areaBasedTotal), termoMaxAmount);
        console.log("Koszt kwalifikowany termomodernizacji (suma cząstkowych kosztów termomodernizacji, max. " + termoMaxAmount + " zł): " + Math.min((areaBasedTotal), termoMaxAmount) + " zł");
        
        // Dodanie pozostałych kosztyów
        if (audit.checked) {
            const userCost = parseFloat(auditCost.value);
            totalCost += Math.min(userCost, maxCosts.audit);
            console.log("Koszt kwalifikowany audytu: " + Math.min(userCost, maxCosts.audit) + " zł");
        }
        
        if (energyCertificate.checked) {
            const userCost = parseFloat(energyCertificateCost.value);
            totalCost += Math.min(userCost, maxCosts.energyCertificate);
            console.log("Koszt kwalifikowany świadectwa energetycznego: " + Math.min(userCost, maxCosts.energyCertificate) + " zł");
        }
        
        // Uwzględnienie poziomu dofinansowania
        const fundingRate = parseFloat(fundingLevel.value);
        let grantAmount = totalCost * fundingRate;
        console.log("Mnożnik ze względu na poziom dofinansowania: " + fundingLevel.value);
        
        // Uwzględnienie działalności gospodarczej
        if (businessActivity.checked) {
            const total = parseFloat(totalArea.value);
            const business = parseFloat(businessArea.value);
            const businessPercentage = business / total;
            console.log("Mnożnik ze względu na działalność gospodarczą: " + (1 - businessPercentage));
            
            // Warunek czy działalność nie przekracza 30%
            if (businessPercentage > 0.3) {
                resultDiv.classList.add('hidden');
                errorMessageDiv.textContent = 'Powierzchnia działalności przekracza 30% powierzchni całkowitej budynku, dotacja nie może zostać przyznana';
                errorMessageDiv.classList.remove('hidden');
                return;
                console.log("Dotacja nie będzie przyznana -> powierzchnia działalności przekracza 30% powierzchni budynku");
            }
            
            grantAmount *= (1 - businessPercentage);
        }
        
        // Wyświetl wynik
        resultDiv.classList.remove('hidden');
        resultDiv.textContent = `Możliwa dotacja do kwoty: ${grantAmount.toFixed(2)} zł`;
        errorMessageDiv.classList.add('hidden');
        note.classList.remove('hidden');
        note.textContent = 'Pamiętaj, że kwota dotacji obliczona jest wyłącznie na podstawie wprowadzonych danych. Decyzja w sprawie możliwości zawarcia umowy dotacji oraz wysokości dofinansowania wydawana jest przez odpowiedni dla miejsca inwestycji Wojewódzki Fundusz Ochrony Środowiska i Gospodarki Wodnej.';
        console.log("Dopuszczalna końcowa kwota dofinansowania: " + grantAmount.toFixed(2) + " zł");
        
        // Funkcja opóźniająca scroll-down z powodu konfliktu funkcji w niektórych przeglądarkach 
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 50);
    }
    
    // Przypisanie funkcji liczącej do przycisku            
    calculateBtn.addEventListener('click', function(e) {
        console.clear();
        e.preventDefault();
        calculateGrant();
    });
});