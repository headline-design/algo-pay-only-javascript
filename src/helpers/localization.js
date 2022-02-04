const localeSettingKey = 'algo_wallet_localizations';

export function localizedResourceOrDefault(name, defaultValue, replacements={}){
    const localizationRepo = ensureRepo();
    if(localizationRepo && localizationRepo.strings){
        let val = localizationRepo.strings[name] ?? defaultValue;
        for (let propName in replacements) {
            val = val.replace(new RegExp("\\{" + propName + "\\}", "gi"), replacements[propName]);
        }
        return val;
    }
    return defaultValue;
}

export function getLocaleCode(){
    const localizationRepo = ensureRepo();
    return localizationRepo.locale;
}

export function setLocale(locale){
    switch(locale.toLowerCase()){
        case 'pl-pl':window[localeSettingKey] = {
            locale:'pl-pl',
            strings:{
              confirmAction: 'Zatwierdź akcję',
              selectAndConnect: 'Wybierz portfel i zatwierdź akcję',
              connectBtn: 'Połącz',
              completeTransfer: 'Dokończ transakcję',
              singAndSend: 'Podpisz transakcję i wyślij',
              txnSummary: 'Podsumowanie transkacji',
              myAddress: 'Adres nadawcy',
              amount: 'Kwota',
              sendTransactionBtn: 'Wyślij',
              cancelBtn:'Anuluj'
            }
        }; break;
        default: window[localeSettingKey] = {
            locale:'en-us'
        };break;
    }
}

function ensureRepo(){
    let repo = window[localeSettingKey];
    if(!repo){
        repo = window[localeSettingKey] = {
                                            locale:'en-us',
                                            strings:{}
                                        }
        
    }
    return repo;
}


