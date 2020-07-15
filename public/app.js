/*
  _    _ _____ 
 | |  | |_   _|
 | |  | | | |  
 | |  | | | |  
 | |__| |_| |_ 
  \____/|_____|     

 */
try{
    Sentry.init({ dsn: 'https://b27ef52098ea4301a7faf960dca44f6f@o420766.ingest.sentry.io/5339520' });    
}catch{
    console.log("nope")
}

var translateElements = {
    0:"scale-text",
    1:"confirm-scale",
    2:"rotate-device-text",
    3:"click-to-close-rotation",
    4:"account-tab-text",
    5:"email-text-login",
    6:"password-text-login",
    7:"login-button",
    8:"create-account-button",
    9:"forgot-password-text",
    10:"register-tab-text",
    11:"email-text-register",
    12:"password-text-register",
    13:"confirm-password-text-register",
    14:"register-button",
    15:"confirm-register-tab-text",
    16:"code-text-confirm",
    17:"confirm-button-confirm",
    18:"go-back-confirm",
    19:"reset-tab-text",
    20:"email-text-reset",
    21:"submit-text-reset",
    22:"go-back-reset",
    23:"verify-tab-text",
    24:"code-text-verify",
    25:"password1-text-verify",
    26:"password2-text-verify",
    27:"submit-button-verify",
    28:"go-back-verify",
    29:"settings-tab-text",
    30:"change-zoom-button",
    31:"turnOffFullscreen",
    32:"Disable-next-key-practice",
    33:"Hide-practice-note-animation",
    34:"Display-Note-Names",
    35:"check-midi-button",
    36:"reset-all-button",
    37:"go-back-settings",
    38:"localStoredBtn",
    39:"accountBtn",
    40:"local-tab-text",
    41:"import-button",
    42:"account-songs-tab-text",
    43:"reload-button",
    44:"store-all-button",
    45:"promptCancel",
    46:"promptOK",
    47:"main-page-text-menu",
    48:"account-text-menu",
    49:"settings-text-menu",
    50:"library-text-menu",
    51:"help-text-menu",
    52:"manageRecordingsBtn",
    53:"toggleRecordBtn",
    54:"old-text",
    55:"go-back-register",
    56:"download-songs-button",
    57:"language-selector-text",
    58:"welcome-text",
    59:"ignore-button-rotation",
    60:"change-button-input-mode",
    61:"sheet-displayer-text-menu",
    62:"song-composer-text-menu"
}
var systemMessagesText = {
    English:["Write song name","Please write a non empty name","There is already a song with this name: ","Please put an email","success! please check you email.","Error trying to reset password","Link copied!","Invalid link!","Added song by link: ","The song already exists:","Error importing song","Password successfully reset!","Error verifying the account!","Please put email,username and password","You put an invalid email!","Password must be at least 6 characters long!","The passwords don't match!","Error creating the account!","Please put username and password","Logged in!","Error trying to LogIn","You are not logged in!","There are no songs saved in the database or you haven't loaded them","Already saved \n","Done!","Error trying to get songs!","Error trying to delete song!","Error trying to save songs!","Song is too big, it can't be uploaded!","You put an invalid code!","Account verified!","Error verifying the account!","Error importing song!","MIDI is supported!","MIDI is not supported! It only works on google chrome"],
    Italiano:["Scrivi il nome della canzone!","Scrivi un nome non vuoto","C'è già una canzone con questo nome:  ","Inserisci una email","Fatto! Controlla la tua email","Errore nel reset della password","Link copiato!","Link invalido!","Aggiunta canzone da link: ","Questa canzone è già salvata:","Errore nell'importazione","Password resettata!","Errore nella verifica dell'account!","Inserisci email,username e password","Hai inserito una mail non valida!","La password deve essere almeno 6 caratteri!","Le password non sono uguali!","Errore nella creazione dell'account!","Inserisci username e password","Loggato!","Errore nel login!","Non sei loggato!","Non ci sono canzoni salvate o non hai ricaricato!","Già salvata \n","Fatto!","Errore nel riperimento delle canzoni!!","Errore nella cancellazione della canzone!","Errore nel salvataggio!","Canzone troppo grande, non può essere caricata!","Hai inserito un codice non valido!","Account verificato!","Errore nella verifica dell'account!","Errore nell'importazione!","MIDI è supportato!","MIDI non supportato! Funziona solo su chrome!"],
    Français:["Write song name","Please write a non empty name","There is already a song with this name: ","Please put an email","success! please check you email.","Error trying to reset password","Link copied!","Invalid link!","Added song by link: ","The song already exists:","Error importing song","Password successfully reset!","Error verifying the account!","Please put email,username and password","You put an invalid email!","Password must be at least 6 characters long!","The passwords don't match!","Error creating the account!","Please put username and password","Logged in!","Error trying to LogIn","You are not logged in!","There are no songs saved in the database or you haven't loaded them","Already saved \n","Done!","Error trying to get songs!","Error trying to delete song!","Error trying to save songs!","Song is too big, it can't be uploaded!","You put an invalid code!","Account verified!","Error verifying the account!","Error importing song!","MIDI is supported!","MIDI is not supported! It only works on google chrome"],
    Traditional_chinese_繁體中文:["命名歌曲","請輸入歌曲名稱","這個歌曲名稱已被使用: ","請輸入電郵地址","成功！請檢查您的電子郵件。","嘗試重設密碼時出錯","已復制鏈結！","無效的鏈結！","通過鏈結添加了歌曲：","這首歌已經存在：","導入歌曲時出錯","密碼重置成功！","驗證帳號時出錯！","請輸入電子郵件，用戶名稱和密碼","您輸入了無效的電子郵件！","密碼必須至少有6個字符長！","密碼不匹配！","創建帳戶時出錯！","請輸入用戶名和密碼","登錄！","登錄時出錯","你沒有登錄！","數據庫中沒有保存任何歌曲，或者您尚未加載它們","已保存\n","完成!","獲取歌曲時出錯！","刪除歌曲時出錯！","嘗試保存歌曲時出錯！","歌曲太大，無法上傳！","您輸入了無效的密碼！","帳戶已驗證！","驗證帳戶時出錯！","導入歌曲時出錯！","支援MIDI！","不支援MIDI！此功能僅適用於谷歌瀏覽器"],
    Português_Brasileiro:["Nome da música","Por favor coloque um nome.","Já tem uma música com esse nome: ","Coloque seu email.","Sucesso! Por favor, verifique seu email.","Erro ao tentar resetar a senha","Link copiado!","Link inválido!","Música adicionada pelo link: ","A música já existe:","Erro ao importar música","Senha resetada com sucesso!","Erro ao verificar a conta!","Por favor coloque um email, usuário e senha","Você digitou um email inválido!","A senha precisa ter no mínimo 6 caracteres!","As senhas são diferentes.","Erro ao criar conta!","Por favor coloque usuário e senha","Logado!","Erro no Login","Você não está logado!","Não tem músicas salvas no sistema ou você ainda não carregou elas.","Já foi salvo. \n","Feito!","Erro ao tentar encontrar músicas!","Erro ao deletar música!","Erro ao salvar música!","A música é muito grande, não tem como fazer upload!","Código inválido!","Conta verificada!","Erro ao verificar conta!","Erro ao importar música!","MIDI é suportado!","MIDI não é suportado! Só funciona no Google Chrome"],
    Deutsch:["Write song name","Please write a non empty name","There is already a song with this name: ","Please put an email","success! please check you email.","Error trying to reset password","Link copied!","Invalid link!","Added song by link: ","The song already exists:","Error importing song","Password successfully reset!","Error verifying the account!","Please put email,username and password","You put an invalid email!","Password must be at least 6 characters long!","The passwords don't match!","Error creating the account!","Please put username and password","Logged in!","Error trying to LogIn","You are not logged in!","There are no songs saved in the database or you haven't loaded them","Already saved \n","Done!","Error trying to get songs!","Error trying to delete song!","Error trying to save songs!","Song is too big, it can't be uploaded!","You put an invalid code!","Account verified!","Error verifying the account!","Error importing song!","MIDI is supported!","MIDI is not supported! It only works on google chrome"],
    Русский:["Write song name","Please write a non empty name","There is already a song with this name: ","Please put an email","success! please check you email.","Error trying to reset password","Link copied!","Invalid link!","Added song by link: ","The song already exists:","Error importing song","Password successfully reset!","Error verifying the account!","Please put email,username and password","You put an invalid email!","Password must be at least 6 characters long!","The passwords don't match!","Error creating the account!","Please put username and password","Logged in!","Error trying to LogIn","You are not logged in!","There are no songs saved in the database or you haven't loaded them","Already saved \n","Done!","Error trying to get songs!","Error trying to delete song!","Error trying to save songs!","Song is too big, it can't be uploaded!","You put an invalid code!","Account verified!","Error verifying the account!","Error importing song!","MIDI is supported!","MIDI is not supported! It only works on google chrome"],
    한국어:["노래 이름을 입력해주세요.","공백이 아닌 이름을 입력해주세요.","동일한 노래 이름이 존재합니다: ","이메일 주소를 기입해주세요.","성공! 메일을 확인해주세요.","비밀번호 초기화 실패","링크가 복사됨!","잘못된 링크!","링크로 추가된 노래: ","노래가 이미 존재합니다:","노래 가져오기 실패","비밀번호 초기화 성공!","이메일 인증 실패!","이메일, 아이디, 비밀번호를 입력해주세요.","잘못된 이메일 입니다!","비밀번호는 최소 6자리 이상이 되어야 합니다!","비밀번호가 맞지 않습니다!","계정 생성 오류!","아이디와 비밀번호를 입력해주세요.","로그인 되었습니다!","로그인 오류","로그인 되어 있지 않습니다!","Database에 저장된 노래가 없거나 노래를 불러오지 않았습니다.","이미 저장되었습니다. \n","완료!","노래를 가져오는데 실패했습니다!","노래를 삭제하는데 실패했습니다!","노래를 저장하는데 실패했습니다!","노래 용량이 너무 커서 업로드 될 수 없습니다!","잘못된 코드가 입력되었습니다!","계정이 인증되었습니다!","계정인증에 실패했습니다!","노래를 가져오는데 실패했습니다!","MIDI가 지원됩니다!","MIDI가 지원되지 않습니다! 구글 크롬에서만 작동합니다."],
    Română:["Scrieți numele melodiei","Vă rugăm să scrieți un nume care nu este gol","Există deja o melodie cu acest nume: ","Vă rugăm să puneți un e-mail","succes! vă rugăm să verificați mail-ul.","Eroare la încercarea de resetare a parolei","Link copiat!","Link invalid!","Piesa a fost adăugată după link: ","Piesa există deja:","Eroare la importarea melodiei","Parola resetata cu succes!","Eroare la verificarea contului!","Vă rugăm să introduceți e-mail, nume de utilizator și parolă","Ați pus un e-mail invalid!","Parola trebuie sa conțină minim 6 caractere!","Parolele nu se potrivesc!","Eroare la crearea contului!","Vă rugăm să introduceți numele de utilizator și parola","Conectat!","Eroare la încercarea de logare","Nu ești autentificat!","Nu există melodii salvate în baza de date sau nu le-ați încărcat","Deja a fost salvat \n","Terminat!","Eroare la încercarea de a obține melodii!","Eroare încercat să ștergi melodia!","Eroare la încercarea de a salva melodii!","Piesa este prea mare, nu poate fi încărcată!","Ați pus un cod nevalid!","Cont verificat!","Eroare la verificarea contului!","Eroare la importarea melodiei!","MIDI este acceptat!","MIDI nu este acceptat! Funcționează numai pe Google Chrome"],
    Español:["Write song name","Please write a non empty name","There is already a song with this name: ","Please put an email","success! please check you email.","Error trying to reset password","Link copied!","Invalid link!","Added song by link: ","The song already exists:","Error importing song","Password successfully reset!","Error verifying the account!","Please put email,username and password","You put an invalid email!","Password must be at least 6 characters long!","The passwords don't match!","Error creating the account!","Please put username and password","Logged in!","Error trying to LogIn","You are not logged in!","There are no songs saved in the database or you haven't loaded them","Already saved \n","Done!","Error trying to get songs!","Error trying to delete song!","Error trying to save songs!","Song is too big, it can't be uploaded!","You put an invalid code!","Account verified!","Error verifying the account!","Error importing song!","MIDI is supported!","MIDI is not supported! It only works on google chrome"],
    Tiếng_Việt:["Điền tên bài nhạc","Vui lòng điền tên vào chỗ trống","Đã có một bài nhạc với tên này: ","Vui lòng điền email","Thành công! Vui lòng kiểm trả mail.","Lỗi khi đặt lại mật khẩu","Đã sao chép liên kế!","Liên kết không hợp lệ!","Đã thêm bài nhạc theo liên kết: ","Bài hát đã tồn tại:","Lõi nhập bài nhạc","Đặt lại mật khẩu thành công!","Lỗi khi xác minh tài khoản!","Vui lòng đặt email, tên người dùng và mật khẩu","Bạn đặt một email không hợp lệ!","Mật khẩu phải có độ dài ít nhất 6 ký tự!","Mật khẩu không khớp!","Lỗi khi tạo tài khoản!","Vui lòng đặt tên người dùng và mật khẩu","Đã đăng nhập!","Lỗi khi đăng nhập","Bạn chưa đăng nhập!","Không có bài nhạc nào được lưu trong cơ sở dữ liệu hoặc bạn chưa tải chúng","Đã lưu \n","Xong!","Lỗi khi lấy bài hát!","Lỗi khi xóa bài nhạc","Lỗi khi lưu bài nhạc!","Bài nhạc quá lớn, không thể tải lên","Bạn đã đặt một mã không hợp lệ!","Đã xác minh tài khoản!","Lỗi khi xác minh tài khoản!","Lỗi nhập bài hát!","MIDI đã hỗ trợ!","MIDI không hỗ trợ! Chỉ hoạt động trên Google Chrome"],

}
var translateText = {
    English:["Press + and - to change how the page looks!\nYou can always change this in the settings","CONFIRM","The website is better used in Landscape, please rotate your device.","Click anywhere to close","Account","EMAIL","PASSWORD","LOGIN","Create account","Forgot password?","Register to Sky Music!","EMAIL","PASSWORD","CONFIRM PASSWORD","REGISTER","Register to Sky Music!","CODE","CONFIRM","Go back","Reset Password!","EMAIL","SUBMIT","Go back","Reset Password!","RESET CODE","NEW PASSWORD","CONFIRM NEW PASSWORD","SUBMIT","Go back","Settings","Change website zoom","Turn off auto fullscreen","Disable next key practice","Hide practice note animation","Display Note Names","Check MIDI support","Reset all songs and settings","Go back","My songs","Account songs","Here are all your songs!","Import songs","Here are all the songs saved in your account!","Reload","Store all songs locally","Cancel","OK","Main page","Account","Settings","Song Library","Need help?","Manage Recordings","Start/Stop recording","OLD","Go back","Download songs","Select language","Welcome to Sky Music!","Never show again","Turn on compatibility mode","Sheet displayer","Song composer"],
    Italiano:["Premi + e - per cambiare l'aspetto del sito!\nPuoi sempre cambiarlo nelle impostazioni","CONFERMA","È consigliato l'uso del sito in orizzontale, ruota il dispositivo.","Premi ovunque per chiudere","Account","EMAIL","PASSWORD","LOGIN","Crea account","Password dimenticata?","Registrati su Sky Music!","EMAIL","PASSWORD","CONFERMA PASSWORD","REGISTRATI","Registrati su Sky Music!","CODICE","CONFERMA","Indietro","Resetta la Password!","EMAIL","INVIA","Indietro","Resetta la Password!","CODICE DI RESET","NUOVA PASSWORD","CONFERMA NUOVA PASSWORD","INVIA","Torna indietro","Impostazioni","Cambia zoom del sito","Disattiva schermo intero automatico","Disattiva indizio prossima nota","Nascondi animazione nella pratica","Mostra nomi delle note","Controlla supporto MIDI","Resetta tutte le canzoni e impostazioni","Indietro","Le mie canzoni","Canzoni dell'account","Ecco tutte le tue canzoni!","Importa canzoni","Ecco tutte le canzoni salvate nel tuo account!!","Ricarica","Salva tutto localmente","Cancella","OK","Pagina iniziale","Account","Impostazioni","Libreria canzoni","Bisogno di aiuto?","Gestisci registrazioni","Inizia/Ferma registrazione","VECCHIO","Indietro","Scarica canzoni","Seleziona lingua","Benvenuto su Sky Music!","Non mostrare più","Attiva modalità compatibilità","Visualizzatore canzoni","Compositore"],
    Français:["Appuie sur + et - pour changer l'apparence de la page!\nTu pourras toujours modifier cela plus tard dans Réglages","CONFIRMER","Le site est bien mieux en format paysage, tourne ton appareil s'il te plait.","Appuie n'importe où pour fermer","Compte","EMAIL","MOT DE PASSE","SE CONNECTER","Créer un compte","Mot de passe oublié ?","S'inscrire sur Sky Music!","EMAIL","MOT DE PASSE","CONFIRMER LE MOT DE PASSE","INSCRIPTION","S'inscrire sur Sky Music!","CODE","CONFIRMER","Retour","Reinitialiser le mot de passe!","EMAIL","SOUMETTRE","Retour","Reinitialiser le mot de passe!","REINITIAISER LE CODE","NOUVEAU MOT DE PASSE","CONFIRMER LE NOUVEAU MOT DE PASSE","SOUMETTRE","Retour","Réglages","Modifier le zoom","Désactiver le plein écran automatique","Désactiver l'entraînement pour la clé suivante","Masquer l'animation des notes de l'entraînement","Afficher le nom des notes","Voir support MIDI","Reinitialiser toutes les chansons et réglages","Retour","Mes chansons","Chansons du compte","Voici toutes tes chansons!","Importer des chansons","Voici toutes les chansons sauvegardées sur ton compte!","Recharger","Enregistrer les chansons localement","Fermer","OK","Page principale","Compte","Réglages","Bibliothèque des chansons","Besoin d'aide ?","Gérer les enregistrements","Start/Stop l'enregistrement","ANCIEN","Retour","Télécharger des chansons","Choisir la langue","Bienvenue sur Sky Music","Ne me montre plus jamais","Turn on compatibility mode","Sheet displayer","Song composer"],
    Traditional_chinese_繁體中文:["按下 + 和 - 更改頁面的大小！\n您隨時可以在設定中更改此設定","確認","本網站更適合橫向使用，請旋轉您的設備。","點擊任意位置來關閉視窗","帳號","電子郵件","密碼","登入","創建帳號","忘記密碼？","註冊 Sky Music!","電子郵件","密碼","確認密碼","註冊","註冊 Sky Music!","驗証碼","確認","返回","重設密碼！","電子郵件","遞交","返回","重設密碼！","重設用驗証碼","新密碼","確認新密碼","遞交","返回","設定","改變頁面大小","關閉自動全屏","禁用 練習模式顯示下一鍵","隱藏 練習模式按鍵動畫","顯示音名","檢查支援MIDI","重設所有歌曲和設定","返回","本地歌曲","帳號歌曲","這是您的所有歌曲！","匯入歌曲","這是您帳號中保存的所有歌曲！","重新匯入","將所有歌曲存儲在本地","取消","OK","主頁","帳號","設定","歌曲庫","需要幫忙？","管理錄音","開始/停止 錄製","舊版","返回","下載歌曲","選擇語言","歡迎來到Sky Music!","不要再顯示","開啟兼容模式","樂譄展示器","歌曲編輯器"],
    Português_Brasileiro:["Pressione + e - para alterar o tamanho dos ícones!\nVocê pode modificar em configurações quando quiser","OK","A experiencia fica melhor em posição de retrato. Por favor rotacione o seu dispositivo.","Toque para fechar.","CONTA","EMAIL","SENHA","LOGIN","Criar uma conta.","Esqueci minha senha.","Criar conta Sky Music!","EMAIL","SENHA","CONFIRMAR SENHA","CRIAR","Minha Conta Sky Music!","CÓDIGO","CONFIRMAR","Voltar","Resetar Senha!","EMAIL","ENVIAR","Voltar","Resetar Senha!","CÓDIGO DE RESET","NOVA SENHA","CONFIRMAR NOVA SENHA","ENVIAR","Voltar","Configurações","Alterar tamanho dos ícones","Desligar Tela Interia (Auto)","Desativar próxima tecla ao praticar","Desativar animação de nota ao praticar","Mostrar as Notas(CDEFGAB)","Checar suporte MIDI","Resetar todas as músicas e configurações.","Voltar","Minhas Músicas","Músicas na Nuvem","Aqui estão todas as suas músicas!","Importar Música","Aqui estão todas as suas músicas salvas na Nuvem!","Recarregar","Armazenar todas as músicas no dispositivo local.","Cancelar","OK","Página Principal","Minha Conta","Configurações","Biblioteca de Músicas","Precisa de ajuda?","Minhas Gravações","Iniciar/Parar gravação","ANTIGO","Voltar","Baixar Música","Trocar Idioma","Bem Vindo ao Sky Music!","Não mostre novamente","Ligar modo de compatibilidade","Sheet displayer","Song composer"],
    Deutsch:["Drücken Sie die Taste + und – um das Aussehen der Seite zu ändern!\nSie können dies immer in den Einstellungen ändern","BESTÄTIGEN"," Die Website hat eine bessere Verwendung im Querformat. Bitte drehen Sie Ihr Gerät.", "Klicken Sie bitte irgendwo auf den Bildschirm, um zu schließen","Konto","EMAIL","PASSWORT","ANMELDEN","Reg","Haben Sie das Passwort vergessen?","Registriere dich zu Sky Music!","EMAIL","PASSWORT","PASSWORT BESTÄTIGEN","REGISTRIEREN","Registriere dich zu Sky Music!","CODE","BESTÄTIGEN","Zurück","Passwort zurücksetzen!","EMAIL","BESTÄTIGEN","Zurück","Passwort zurücksetzen!","CODE ZURÜCKSETZEN","NEUES PASSWORT","NEUES PASSWORT BESTÄTIGEN","BESTÄTIGEN","Zurück","Einstellungen","Website-Zoom ändern","Automatischen Vollbildmodus ausschalten","Hinweis auf die nächste Note deaktivieren","Übungsnotenanimation ausblenden","Notennamen anzeigen","MIDI-Unterstützung überprüfen","Alle Lieder und Einstellungen zurücksetzen","Zurück","Meine Lieder","Konto Lieder","Hier sind alle deine Lieder!","Lieder importieren ","Hier sind alle gespeicherten Lieder auf deinem Konto!","Neu laden","Alle Lieder lokal speichern","Beenden","OK","Hauptseite","Konto","Einstellungen","Liederbibliothek","Brauchen Sie Hilfe?","Aufnahmen verwalten","Aufname starten/stoppen","ALT","Zurück","Lieder runterladen","Sprache auswählen","Willkommen zu Sky Music!","Nicht mehr anzeigen","Aktivieren Sie den Kompatibilitätsmodus","Sheet displayer","Song composer"],
    Русский:["Нажмите + и -, чтобы изменить внешний вид страницы!\nВы всегда можете изменить это в настройках","ПОДТВЕРДИТЬ","Веб-сайт лучше использовать в альбомной ориентации, поверните устройство","Нажмите в любом месте, чтобы закрыть","Аккаунт","Е-МЕЙЛ","ПАРОЛЬ","ЛОГИН","Создать аккаунт","Забыли пароль?","Зарегистрироваться в Sky Music!","Е-МЕЙЛ","ПАРОЛЬ","ПОДТВЕРДИТЬ ПАРОЛЬ","РЕГИСТРАЦИЯ","Зарегистрироваться в Sky Music!","КОД","ПОДТВЕРДИТЬ","Вернуться назад","Сбросить пароль!","Е-МЕЙЛ","ПОДТВЕРДИТЬ","Вернуться назад","Сбросить пароль!","СБРОСИТЬ КОД","НОВЫЙ ПАРОЛЬ","ПОДТВЕРДИТЬ НОВЫЙ ПАРОЛЬ","ПОДТВЕРДИТЬ","Вернуться назад","Настройки","Изменить масштабирование веб-сайта","Отключить автоматический полноэкранный режим","Отключить следующую ключевую практику","Скрыть анимацию заметки для практики","Показать имена заметок","Проверить поддержку MIDI","Сбросить все песни и настройки","Вернуться назад","Мои песни","Песни аккаунта","Вот все ваши песни!","Импортировать песни","Вот все песни, сохраненные в вашем аккаунте!, ","Перезагрузить","Сохранить все песни локально","Отмена","ОК","Главная страница","Аккаунт","Настройки","Библиотека песен","Нужна помощь?","Управление записями","Запуск/остановка записи","СТАРЫЕ","Вернуться назад","Скачать песни ","Выбрать язык","Добро пожаловать в Sky Music!","Больше не показывать","Turn on compatibility mode","Sheet displayer","Song composer"],
    한국어:["+와 -로 페이지가 어떻게 보여지는지 조정하세요!\n이는 언제나 설정에서 변경하실 수 있어요.","확인","본 웹사이트는 가로 모드에 최적화되어 있습니다. 기기를 돌려 주세요.","아무 곳이나 클릭하여 닫기","계정","이메일","비밀번호","로그인","계정 만들기","비밀번호 찾기","Sky Music에 회원가입하세요!","이메일","비밀번호","비밀번호 확인","회원가입","Sky Music에 회원가입하세요!","코드","확인","뒤로가기","비밀번호를 초기화했습니다!","이메일","확인","뒤로가기","비밀번호를 초기화했습니다!","리셋 코드","새 비밀번호","새 비밀번호 확인","확인","뒤로가기","설정","웹사이트 줌 조정","자동 전체화면 끄기","다음 키 연습 끄기","연습 음 애니매이션 끄기","음계 이름 끄기","MIDI 지원 확인","모든 곡과 설정 초기화","뒤로가기","내 곡","계정 곡","여기에서 당신의 모든 곡들을 보실 수 있습니다!","곡 불러오기","여기에서 당신의 계정에 저장된 모든 곡들을 보실 수 있습니다!","새로고침","모든 곡을 로컬 저장소에 보관하기","취소","확인","메인 페이지","계정","설정","곡 라이브러리","도움이 필요하세요?","녹음본 관리","녹음 시작/중지","구","뒤로가기","곡 다운로드","언어 선택","Sky Music에 오신 것을 환영합니다!","다시 보지 않기","Turn on compatibility mode","Sheet displayer","Song composer"],
    Română:["Apăsa + și - ca sa schimbi cum arată pagina! Întotdeauna poți sa schimbi asta în setări.","CONFIRMĂ","Site-ul web este mai bine utilizat în Landscape, vă rugăm să rotiți dispozitivul.","Apăsa oriunde pentru a închide","Cont","EMAIL","PAROLA","Autentificare","Creează cont","Ai uitat parola?","Registra la Sky Music!","EMAIL","PAROLA","CONFIRMA PAROLA","INREGISTREAZA","Inregistreaza la Sky Music!","CODUL","CONFIRMA","intoarce-te","Resetează Parola","EMAIL","TRIMITE","întoarce-te","Resetează Parola!","RESETEAZA CODUL","PAROLA NOUĂ","CONFIRMA PAROLA NOUĂ","TRIMITE","Întoarce-te","Setări","Schimbați zoom-ul site-ului","Turn off auto fullscreen","Dezactivați următoarea practică cheie","Ascundeți animarea notelor de practică","Afișați numele notelor","Verificați suportul MIDI","Resetați toate melodiile și setările","intoarce-te","Melodiile mele","Cont de Cântece","Aici sunt toate melodiile tale","Importa melodii","Aici sunt toate melodiile salvate în contul dvs.!","Reîncărcați","Stocați toate melodiile local","Anulare","OK","Pagina principală","Cont","Setări","Biblioteca de cântece","Aveți nevoie de ajutor?","Gestionați înregistrările","Începeți / opriți înregistrarea","VECHE","intoarce-te","Descarca cântece","Selectați o limba","Bun venit la Sky Music!","Nu arătați vreodată dinou","Turn on compatibility mode","Sheet displayer","Song composer"],
    Español:["¡Presione + y - para cambiar como la página se ve!\nSiempre puedes cambiar esto en ajustes","CONFIRMAR","Recomendamos usar el sitio web horizontalmente, por favor gire su dispositivo.","Presione cualquier lugar de la pantalla para cerrar","CUENTA","CORREO ELECTRÓNICO","CONTRASEÑA","Iniciar Sesión","Crear cuenta","¿Olvidaste tu contraseña?","¡Registrate a Sky Music!","CORREO ELECTRÓNICO","CONTRASEÑA","CONFIRME CONTRASEÑA","REGISTRAR","¡Registrate a Sky Music!","CODIGO","CONFIRMAR","Regresar","¡Reiniciar contraseña!","CORREO ELECTRÓNICO","ENVIAR","Regresar","¡Reiniciar Contraseña!","REINICIAR CODIGO","NUEVA CONTRASEÑA","CONFIRMAR NUEVA CONTRASEÑA","ENVIAR","Regresar","Ajustes","Cambiar el aumento de la pantalla","Desactivar pantalla completa automática","Desactivar práctica automática de la siguiente nota","Ocultar animación de nota durante práctica","Mostrar nombre de notas","Revisar compatibilidad de MIDI","Reiniciar canciones y configuraciones hechas","Regresar","Mis canciones","Canciones en la cuenta","¡Aquí estan todas tus canciones guardadas!","Importar canciones","¡Aqui están todas las canciones guardadas en tu cuenta!","Recargar","Descargar canciones a tu dispositivo","Cancelar","OK","Página principal","Cuenta","Configuración","Biblioteca de canciones","¿Necesitas ayuda?","Administrar Canciones","Iniciar/Detener grabación","Versión antigua","Regresar","Descargar canciones","Escoger Lenguaje","¡Bienvenido a Sky Music!","No volver a mostrar","Turn on compatibility mode","Sheet displayer","Song composer"],
    Tiếng_Việt:["Ấn + và - để thay đổi giao diện của trang!\nBạn luôn có thể thay đổi điều này trong cài đặt","XÁC NHẬN","Trang web sẽ tối ưu hơn khi nằm ngang, vui lòng xoay thiết bị của bạn.","Ấn vào bất cứ đâu để tắt","Tài khoản","EMAIL","MẬT KHẨU","ĐĂNG NHẬP","Tạo tài khoản","Quên tài khoản?","Đăng ký Sky Music!","EMAIL","MẬT KHẨU","XÁC NHẬN MẬT KHẨU","ĐĂNG KÝ","Đăng ký Sky Music!","CODE","XÁC NHẬN","Quay lại","Đặt ại Mật khẩu!","EMAIL","GỬI ĐI","Quay lại","Nhập lại Mật khẩu!","NHẬP LẠI CODE","MẬT KHẨU MỚI","XÁC NHẬN MẬT KHẨU MỚI","GỬI ĐI","Quay lại","Cài đặt","Thay đổi thu phóng trang web","Tắt tự động full màn hình","Vô hiệu hóa thực hành khóa tiếp theo","Ẩn hoạt ảnh của nốt nhạc","Tên Nốt Nhạc Hiển Thị","Kiểm trả hỗ trơ MIDI","Thiết lập lại tất cả bài nhạc và cài đặt","Quay lại","Bài nhạc của tôi","Bài nhạc trong tài khoản","Đây là tất cả bài nhạc của bạn!","Nhập bài nhạc","Dưới đây là tất cả các bài hát được lưu trong tài khoản của bạn!","Tải lại","Lưu trữ tất cả các bài hát tại địa phương","Hủy","OK","Trang chính","Tải khoản","Cài đặt","Danh sách bản nhạc","Hỗ trợ?","Quản lý bài nhạc","Bắt đầu/Dừng ghi âm","CŨ","Quay lại","Tải bài nhạc","Chọn ngôn ngữ","Chào mừng đến với Sky Music!","Không bao giờ mở trở lại","Bật chế độ tương thích","Hiển thị Sheet","Tạo bản nhạc"],
        
    
}

//--------------------------------------------------------------------------------------------------------//

function redirectPage(redirect) {
    location.href = window.location.origin + redirect
}


var selectedLanguage = "English"
function changeLanguage(language){
    localStorage.setItem("language",language)
    try{
        let length = translateText[language].length
        for(var i = 0;i<length;i++){
            $("#"+translateElements[i]).text(translateText[language][i])
        }
        selectedLanguage = language
    }catch{}
}

//--------------------------------------------------------------------------------------------------------//

var savedLanguage = localStorage.getItem("language")
var userLanguage = navigator.language || navigator.userLanguage; 
    userLanguage = userLanguage.toLowerCase()
if(savedLanguage == null){
    switch(userLanguage){
        case "fr":    changeLanguage("Français"); break;
        case "fr-fr": changeLanguage("Français"); break;
        case "fr-be": changeLanguage("Français"); break;
        case "fr-ca": changeLanguage("Français"); break;
        case "fr-lu": changeLanguage("Français"); break;
        case "fr-ch": changeLanguage("Français"); break;
        case "fr-mc": changeLanguage("Français"); break;


        case "ro":    changeLanguage("Română"); break;


        case "de":    changeLanguage("Deutsch"); break;
        case "de-de": changeLanguage("Deutsch"); break;
        case "de-at": changeLanguage("Deutsch"); break;
        case "de-lu": changeLanguage("Deutsch"); break;
        case "de-ch": changeLanguage("Deutsch"); break;


        case "ru":    changeLanguage("Русский"); break;


        case "es":    changeLanguage("Español"); break;
        case "es-ar": changeLanguage("Español"); break;
        case "es-bo": changeLanguage("Español"); break;
        case "es-cl": changeLanguage("Español"); break;
        case "es-co": changeLanguage("Español"); break;
        case "es-cr": changeLanguage("Español"); break;
        case "es-do": changeLanguage("Español"); break;
        case "es-ec": changeLanguage("Español"); break;
        case "es-sv": changeLanguage("Español"); break;
        case "es-gt": changeLanguage("Español"); break;
        case "es-hn": changeLanguage("Español"); break;
        case "es-mx": changeLanguage("Español"); break;
        case "es-ni": changeLanguage("Español"); break;
        case "es-pa": changeLanguage("Español"); break;
        case "es-py": changeLanguage("Español"); break;
        case "es-pe": changeLanguage("Español"); break;
        case "es-pr": changeLanguage("Español"); break;
        case "es-es": changeLanguage("Español"); break;
        case "es-uy": changeLanguage("Español"); break;
        case "es-ve": changeLanguage("Español"); break;

        case "vi": changeLanguage("Tiếng_Việt"); break;

        case "it-it": changeLanguage("Italiano"); break;
        case "it":    changeLanguage("Italiano"); break;  
        case "it-ch": changeLanguage("Italiano"); break;  


        case "pt-br": changeLanguage("Português_Brasileiro"); break;
        case "pt":    changeLanguage("Português_Brasileiro"); break;


        case "zh":    changeLanguage("Traditional_chinese_繁體中文"); break;
        case "zh-hk": changeLanguage("Traditional_chinese_繁體中文"); break;
        case "zh-cn": changeLanguage("Traditional_chinese_繁體中文"); break;   
        case "zh-sg": changeLanguage("English"); break;   
        case "zh-tw": changeLanguage("Traditional_chinese_繁體中文"); break;  


        case "ko":    changeLanguage("한국어"); break;
        case "ko-kr": changeLanguage("한국어"); break;
            
        default:      changeLanguage("English")           
    }
}else{
    changeLanguage(savedLanguage)
}

//--------------------------------------------------------------------------------------------------------//

function toggleReset() {
    resetPages()
    document.getElementById("secondPage").style.display = "block"
    $("#resetPassword").fadeIn(200)
}

//--------------------------------------------------------------------------------------------------------//

let setScaleDiv = document.getElementById("setScale")
let pageZoom = parseFloat(localStorage.getItem("pageZoom"))
if(pageZoom === null || pageZoom == "" ||pageZoom < 0 || pageZoom > 2 || isNaN(pageZoom)){
    pageZoom = 1
    setScaleDiv.style.display = "block"
}

//--------------------------------------------------------------------------------------------------------//

let scaleNumber = document.getElementById("scaleNumber")
function changeScale(number){
    pageZoom+=parseInt(number)/10
    firstPage.style.zoom = pageZoom
    scaleNumber.innerHTML = Math.floor(pageZoom*100)
}

//--------------------------------------------------------------------------------------------------------//

document.getElementsByTagName("body")[0].addEventListener('touchstart', (e) => {

    // is not near edge of view, exit
    if (e.pageX > 10 && e.pageX < window.innerWidth - 10) return;

    // prevent swipe to navigate gesture
    e.preventDefault();
});
//--------------------------------------------------------------------------------------------------------//

function toggleScaleDiv(){
    $(setScaleDiv).fadeIn(200)
    resetPages()
}

//--------------------------------------------------------------------------------------------------------//

let ignoreFullScreen = (localStorage.getItem("ignoreFullScreen") == "true")
var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream //ignores if it's from ios 
if(ignoreFullScreen) turnOffFullscreen.style.backgroundColor = "rgba(235, 0, 27, 0.8)"
function toggleFullScreenSetting(){
    let turnOffFullscreen = document.getElementById("turnOffFullscreen")
    ignoreFullScreen = !ignoreFullScreen
    if(ignoreFullScreen){
        turnOffFullscreen.style.backgroundColor = "rgba(235, 0, 27, 0.8)"
    }else{
        turnOffFullscreen.style.backgroundColor = "teal"
    }
    localStorage.setItem("ignoreFullScreen",ignoreFullScreen)
}
changeScale(0)
function confirmScale(){
    localStorage.setItem("pageZoom",pageZoom)
    $(setScaleDiv).fadeOut(200)
}

//--------------------------------------------------------------------------------------------------------//

let exitFullScreenBtn = document.getElementById("exitFullScreenBtn")
function exitFullScreen(){
    exitFullScreenBtn.style.display = "none"
    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
      isFullScreen = false
}

//--------------------------------------------------------------------------------------------------------//

function checkIfMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

//--------------------------------------------------------------------------------------------------------//

let isDesktop = !checkIfMobile()
let isFullScreen = false
function toggleFullScreen(){
        //Makes the website full screen
        document.getElementById("video1").play()
        if(isDesktop || ignoreFullScreen || isiOS){
            return
        }
        exitFullScreenBtn.style.display = "block"
        let el = document.documentElement;
        // Supports most browsers and their versions.
        let requestMethod = el.requestFullScreen || el.webkitRequestFullScreen ||
          el.mozRequestFullScreen || el.msRequestFullScreen;   
        if (requestMethod) { 
          requestMethod.call(el);    // Native full screen.
        } else if (typeof window.ActiveXObject !== 'undefined') {    
          let wscript = new ActiveXObject('WScript.Shell');    // Older IE.
          if (wscript !== null) wscript.SendKeys('{F11}');
        }
        isFullScreen = true
}

//--------------------------------------------------------------------------------------------------------//

let exitedPage = false 
$(window).blur(function(){
    exitedPage = true
    if(!isFullScreen){
        return
    }
    exitFullScreen()
    exitFullScreenBtn.style.display = "none"
});

//--------------------------------------------------------------------------------------------------------//

$(window).focus(function(){
    if(exitedPage && autoReloadKeyboard) location.reload()
});

//--------------------------------------------------------------------------------------------------------//

let autoReloadKeyboard = localStorage.getItem("autoReloadKeyboard")
if(autoReloadKeyboard != "true"){
    autoReloadKeyboard = false
}
if(autoReloadKeyboard){
    document.getElementById("reload-keyboard-setting").style.backgroundColor = "rgba(235, 0, 27, 0.8)"
}else{
    document.getElementById("reload-keyboard-setting").style.backgroundColor = "teal"
}

function reloadKeyboardSetting(){
    autoReloadKeyboard = !autoReloadKeyboard
    localStorage.setItem("autoReloadKeyboard",autoReloadKeyboard)
    if(autoReloadKeyboard){
        document.getElementById("reload-keyboard-setting").style.backgroundColor = "rgba(235, 0, 27, 0.8)"
    }else{
        document.getElementById("reload-keyboard-setting").style.backgroundColor = "teal"
    }
}

//--------------------------------------------------------------------------------------------------------//

function ignoreRotation(){
    console.log("ignored")
    localStorage.setItem("ignoreRotateWarning",true)
    document.getElementById("rotateDevice").style.display = "none"
}

//--------------------------------------------------------------------------------------------------------//

//to show/hide the portrait rotate warning
let userDeniedRotate = localStorage.getItem("ignoreRotateWarning")
if(userDeniedRotate == "true"){
    document.getElementById("rotateDevice").style.display = "none"
}

//--------------------------------------------------------------------------------------------------------//

let floatingMessage
function showMessage(msg, msgType, duration) {
    if (duration == undefined) duration = 1500
    floatingMessage = document.getElementById("floatingMessage")
    floatingMessage.innerHTML = msg
    let color
    if (msgType == 0) color = "rgba(235, 0, 27, 0.8)" //ERROR
    if (msgType == 1) color = "lightgreen" //SUCCESS
    if (msgType == 2) color = "#dad8b3" //MESSAGE
    floatingMessage.style.color = color
    $(floatingMessage).fadeIn(200).delay(duration).fadeOut(300)
}

//--------------------------------------------------------------------------------------------------------//

//show menu function
function showMenu() {
    resetForms()
    if (menuButton.style.display != "block") {
        $(menu).fadeOut(200)
        menuButton.style.display = "block"
    } else {
        $(menu).fadeIn(200)
        menuButton.style.display = "none"
    }
}

//--------------------------------------------------------------------------------------------------------//

function toggleLogin() { //This function shows the page that contains the login 
    resetPages()
    document.getElementById("secondPage").style.display = "block"
    $("#login").fadeIn(300)
    showMenu()
}

//--------------------------------------------------------------------------------------------------------//

function disableFormButtons() { //It disables every form buttons (the ones to register for example) for 3seconds to prevent multiple requests sent to the server
    let buttons = document.getElementsByClassName("submitButton")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true
    }
    setTimeout(() => {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false
        }
    }, 3000);
}

//--------------------------------------------------------------------------------------------------------//

function resetLocalStorage() { //Resets everything contained into localstorage
    if (confirm("Do you really want to delete every song saved and settings?")) {
        if (confirm("do you REALLY REALLY want to delete ALL?")) {
            localStorage.clear();
            location.reload();
        }
    }
}

//--------------------------------------------------------------------------------------------------------//

function toggleSavedSongs() { //Shows the page that contains the local/database songs
    localStoredBtn.click()
    if (savedSongsDivWrapper.style.display != "block") {
        $(savedSongsDivWrapper).fadeIn(150)
    } else {
        $(savedSongsDivWrapper).fadeOut(150)
    }
}

//--------------------------------------------------------------------------------------------------------//

function toggleRegister() { //Shows the register page
    resetPages()
    document.getElementById("secondPage").style.display = "block"
    $("#register").fadeIn(200)
}

let reverbToggled = false

function toggleReverb() {
    let toggleReverbBtn = document.getElementById("toggleReverbBtn")
    if (reverbToggled) {
        toggleReverbBtn.style.backgroundColor = "rgba(22, 22, 22, 0.65)"
        reverbToggled = false
    } else {
        toggleReverbBtn.style.backgroundColor = "rgba(235, 0, 27, 0.8)"
        reverbToggled = true
    }
}
//--------------------------------------------------------------------------------------------------------//

let instrumentsWrapper = document.getElementById("instrumentsNew")

function toggleInstrumentList() { //Shows the side menu (on the right) to chose the instrument
    $(pitchTab).fadeOut(50)
    if (instrumentsWrapper.style.display != "block") {
        $(instrumentsWrapper).fadeIn(200)
    } else {
        $(instrumentsWrapper).fadeOut(200)
    }
}

//--------------------------------------------------------------------------------------------------------//

let pitchTab = document.getElementById("pitchTab")
function togglePitchList() { //Shows the side menu (on the right) to chose the pitch level
    $(instrumentsWrapper).fadeOut(50)
    if (pitchTab.style.display != "block") {
        $(pitchTab).fadeIn(200)
    } else {
        $(pitchTab).fadeOut(200)
    }
}

function toggleSongRange() { //Shows the sideways input range to pick from what note to retry
    $(instrumentsWrapper).fadeOut(50)
    $(pitchTab).fadeOut(50)

}

//--------------------------------------------------------------------------------------------------------//

function toggleSettings() { //Shows the settings page
    resetPages()
    document.getElementById("secondPage").style.display = "block"
    $("#settings").fadeIn(200)
    showMenu()
}

//--------------------------------------------------------------------------------------------------------//

function toggleResetConfirm() { //Shows the page to confirm the registration of the accout
    resetPages()
    document.getElementById("secondPage").style.display = "block"
    $("#verifyPasswordAndCode").fadeIn(200)
}

//--------------------------------------------------------------------------------------------------------//

let disableAnimation = false
let disableNextKey = false
//THIS loads the important settings that are saved into localstorage
if (localStorage.getItem("disableAnimation") != null) {
    if (localStorage.getItem("disableAnimation") == "true") { //to disable the key animation (from transparent to red)
        disableAnimation = true
        document.getElementById("Hide-practice-note-animation").style.backgroundColor = "rgba(235, 0, 27, 0.8)"
    } else {
        disableAnimation = false
        document.getElementById("Hide-practice-note-animation").style.backgroundColor = "teal"
    }
}
if (localStorage.getItem("disableNextKey") != null) {
    if (localStorage.getItem("disableNextKey") == "true") { //to disable the blue outline for the next key
        disableNextKey = true
        document.getElementById("Disable-next-key-practice").style.backgroundColor = "rgba(235, 0, 27, 0.8)"
    } else {
        disableNextKey = false
        document.getElementById("Disable-next-key-practice").style.backgroundColor = "teal"
    }
}
function changeSettings(button) { //function that once gotten the button, reads its id and choses which setting it is applied to and writes localstorage with said value
    if (button.style.backgroundColor == "rgba(235, 0, 27, 0.8)") {
        button.style.backgroundColor = "teal"
        if (button.id == "Hide-practice-note-animation") disableAnimation = false, localStorage.setItem("disableAnimation", disableAnimation)
        if (button.id == "Disable-next-key-practice") disableNextKey = false, localStorage.setItem("disableNextKey", disableNextKey)
        if (button.id == "Display-Note-Names") {
            let keyTexts = document.getElementsByClassName("btnText")
            localStorage.setItem("showNoteNames",false)
            for (let i = 0; i < keyTexts.length; i++) { //makes the text inside the key buttons invisible
                keyTexts[i].style.color = "transparent"
            }
        }
    } else {
        if (button.id == "Hide-practice-note-animation") disableAnimation = true, localStorage.setItem("disableAnimation", disableAnimation)
        if (button.id == "Disable-next-key-practice") disableNextKey = true, localStorage.setItem("disableNextKey", disableNextKey)
        if (button.id == "Display-Note-Names") {
            let keyTexts = document.getElementsByClassName("btnText")
            localStorage.setItem("showNoteNames",true)
            for (let i = 0; i < keyTexts.length; i++) { //makes the text inside the key buttons yellow
                keyTexts[i].style.color = "#dad8b3"
            }
        }
        button.style.backgroundColor = "rgba(235, 0, 27, 0.8)"
    }
}
//--------------------------------------------------------------------------------------------------------//

function resetPages() { //this hides all the pages that are contained into the second screen
    document.getElementById("settings").style.display = "none"
    document.getElementById("resetPassword").style.display = "none"
    document.getElementById("verifyPasswordAndCode").style.display = "none"
    document.getElementById("secondPage").style.display = "none"
    document.getElementById("login").style.display = "none"
    document.getElementById("resetPassword").style.display = "none"
    document.getElementById("register").style.display = "none"
    document.getElementById("confirmRegistration").style.display = "none"
}

//--------------------------------------------------------------------------------------------------------//
/*
   _                 _                         _                                   _   
  | |               (_)                       | |                                 | |  
  | |     ___   __ _ _ _ __     __ _ _ __   __| |   __ _  ___ ___ ___  _   _ _ __ | |_ 
  | |    / _ \ / _` | | '_ \   / _` | '_ \ / _` |  / _` |/ __/ __/ _ \| | | | '_ \| __|
  | |___| (_) | (_| | | | | | | (_| | | | | (_| | | (_| | (_| (_| (_) | |_| | | | | |_ 
  |______\___/ \__, |_|_| |_|  \__,_|_| |_|\__,_|  \__,_|\___\___\___/ \__,_|_| |_|\__|
                __/ |                                                                  
               |___/     

 */
let emailreset = "";

function resetPassword() { //Function to reset the email
    let mail = document.getElementById("emailReset").value
    if (mail.trim() == "" || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) { //tests if the email is an actual email format
        showMessage(systemMessagesText[selectedLanguage][3], 2) //put an email
        return;
    }
    let credentials = {
        email: mail
    }
    let request = new XMLHttpRequest();
    request.open("POST", "/resetPassword");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8")
    request.onload = (res) => {
        response = res.target.response;
        if (response == "true") { //if the server validates the credentials, it sends a reset code in the email and proceedes to the next page
            showMessage(systemMessagesText[selectedLanguage][4], 1) //Success, check email
            emailreset = mail;
            toggleResetConfirm()
        } else {
            showMessage(response, 0)
        }
    };
    request.onerror = function (e) {
        showMessage(systemMessagesText[selectedLanguage][5], 0) //error resetting password
    };
    request.send(JSON.stringify(credentials)) //sends the credentials data
    disableFormButtons() //stops all buttons for 3 seconds
}

//--------------------------------------------------------------------------------------------------------//

function getTempSong(url) {
        url = url.split("?tempSong=")[1]
    let request = new XMLHttpRequest();
    request.open("POST", "/getTempSong");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8")
    request.onload = (res) => {
        let song = res.target.response;
        if (song == "false"){
            showMessage("Song doesn't exist!",0,1000)
            return
        }
        saveSong(song.name, song.songNotes, 1,song.pitchLevel,song.bpm,song.isComposed)
    };
    let data = {id: url}
    request.send(JSON.stringify(data))    
}
if(window.location.href.includes("?tempSong=")){
    getTempSong(window.location.href)
}

//--------------------------------------------------------------------------------------------------------//

function generateShareLink(name){
    let request = new XMLHttpRequest();
    request.open("POST", "/generateShareLink");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8")
    request.onload = (res) => {
        response = res.target.response;
        const el = document.createElement('textarea');
        el.value = response;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        showMessage(systemMessagesText[selectedLanguage][6],1,1500) //link copied
    };
    var data = {
        email: globalCredentials.email,
        songName: name
    }
    request.send(JSON.stringify(data))
}

//--------------------------------------------------------------------------------------------------------//

function getByLink(songUrl){
     songUrl = {
         url:songUrl.split("?songUrl=")[1]
     }
     let request = new XMLHttpRequest();
     request.open("POST", "/getByLink");
     request.setRequestHeader("Content-Type", "application/json; charset=utf-8")
     request.onload = (res) => {
         response = res.target.response;
         if(response == "false"){
             showMessage(systemMessagesText[selectedLanguage][7],0,2500) //invalid link
             return
         }
         response = JSON.parse(response)
         try {
            let inputSongs = response
            for (let i = 0; i < inputSongs.length; i++) {
                let element = document.getElementById("Song-" + inputSongs[i].name)
                if(inputSongs[i].bpm == undefined) inputSongs[i].bpm = 220
                if(inputSongs[i].pitchLevel == undefined) inputSongs[i].pitchLevel = 0
                if(inputSongs[i].isComposed == undefined) inputSongs[i].isComposed = false
                if (element == null) { //if there is an element with this id, it means that the song with that name already exists
                    saveSong(inputSongs[i].name, inputSongs[i].songNotes, 1,inputSongs[i].pitchLevel,inputSongs[i].bpm,inputSongs[i].isComposed)
                    showMessage(systemMessagesText[selectedLanguage][8]+inputSongs[i].name,1,1500) //Added song by link
                } else {
                    showMessage(systemMessagesText[selectedLanguage][9]+inputSongs[i].name,2,1500) // song already exists
                }
            }
            } catch {
                showMessage(systemMessagesText[selectedLanguage][10],0,1500) //error importing song
            }
     }
     request.send(JSON.stringify(songUrl))
}
if(window.location.href.includes("?songUrl=")){
    getByLink(window.location.href)
}

//--------------------------------------------------------------------------------------------------------//

function checkResetCode() { //Function to confirm the password reset
    let code = document.getElementById("resetcodeConfirmation").value
    let newpassword = document.getElementById("newpassword").value
    let newpasswordconfirm = document.getElementById("newpasswordconfirm").value
    if (code.length != 36) { //checks if the code is correct format or not
        alert("You put an invalid reset code!")
        return;
    }
    let credentials = {
        code: code,
        email: emailreset,
        password: newpassword,
        passwordConfirm: newpasswordconfirm
    }
    let request = new XMLHttpRequest();
    request.open("POST", "/verifyResetCode");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8")
    request.onload = (res) => {
        response = res.target.response;
        if (response == "true") { //if the server answers with a true, the account password is reset and page is reloaded
            alert(systemMessagesText[selectedLanguage][11]) //password resetted
            location.reload()
            return;
        }
        showMessage(response, 0)
    };
    request.onerror = function (e) {
        alert(systemMessagesText[selectedLanguage][12]) //error verifying account
    };
    request.send(JSON.stringify(credentials)) //sends credentials to be validated
    disableFormButtons()
}

//--------------------------------------------------------------------------------------------------------//

let registrationCredentials;
function register() { //function to register the account to the website
    let mail = document.getElementById("emailRegister").value.toLowerCase()
    let psw = document.getElementById("passwordRegister").value
    let psw2 = document.getElementById("passwordRegister2").value
    if (psw == "" || mail == "") { //checks if the input forms aren't empty
        showMessage(systemMessagesText[selectedLanguage][13], 2) //put email, username, password
        return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) { //tests if the email is a valid email
        showMessage(systemMessagesText[selectedLanguage][14], 2) //invalid email
        return;
    }
    if (psw.length < 6) { //checks if the password is at least long 6 characters
        showMessage(systemMessagesText[selectedLanguage][15]) //password must be at least 6 characters long
        return;
    }
    if (psw != psw2) { //checks if the two passwords from the forms match
        showMessage(systemMessagesText[selectedLanguage][16], 2) //passwords don't match
        document.getElementById("passwordRegister2").value = ""
        document.getElementById("passwordRegister").value = ""
        return;
    }
    let credentials = {
        password: psw,
        email: mail
    }
    let request = new XMLHttpRequest();
    request.open("POST", "/createAccount");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8")
    request.onload = (res) => {
        response = res.target.response;
        registrationCredentials = credentials
        if (response == "true") { //if the server response is true, it proceedes to the next step of the account verification
            resetPages()
            document.getElementById("secondPage").style.display = "block"
            document.getElementById("code-text-confirm").innerHTML = "Check your email, CODE FOR: " + credentials.email
            document.getElementById("confirmRegistration").style.display = "block"
            document.getElementById("register").style.display = "none"
            return;
        }
        showMessage(response, 1)
    };
    request.onerror = function (e) {
        showMessage(systemMessagesText[selectedLanguage][17], 1) //error creating account
    };
    request.send(JSON.stringify(credentials)) //sends the credentials to the server
    disableFormButtons()
}

//--------------------------------------------------------------------------------------------------------//

let isAuthenticated = false
let preloadCredentials = localStorage.getItem("credentials")
if (preloadCredentials != null) { //This is not a really secure way but i don't know how else to do it, it gets the password and email previously used and automatically logins when the page is opened
    preloadCredentials = JSON.parse(preloadCredentials)
    document.getElementById("emailLogin").value = preloadCredentials.email
    document.getElementById("passwordLogin").value = preloadCredentials.password
    login(true)
}

//--------------------------------------------------------------------------------------------------------//

function login(ignoreMessage) { //this does the actual login, it's only used to check if the credentials are correct or not, any changes made are verified again in the server
    //the ignore message is for the first login that doesn't need to say anything
    let mail = document.getElementById("emailLogin").value
    let psw = document.getElementById("passwordLogin").value
    if (mail == "" || psw == "") {
        showMessage(systemMessagesText[selectedLanguage][18], 2)
        return;
    }
    if (psw.length < 6) {
        showMessage(systemMessagesText[selectedLanguage][15], 0)
        return;
    }
    let credentials = {
        password: psw,
        email: mail.toLowerCase()
    }
    let request = new XMLHttpRequest();
    request.open("POST", "/login");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8")
    request.onload = (res) => {
        response = res.target.response;
        if (response == "true") {
            isAuthenticated = true
            globalCredentials = credentials
            secondPage.style.display = "none"
            localStorage.setItem("credentials", JSON.stringify(credentials))
            if (!ignoreMessage) showMessage(systemMessagesText[selectedLanguage][19], 1)

        } else {
            if (!ignoreMessage) showMessage(response, 0)
        }
    };
    request.onerror = function (e) {
        if (!ignoreMessage) showMessage(systemMessagesText[selectedLanguage][20], 0)
    };
    request.send(JSON.stringify(credentials))
}

//--------------------------------------------------------------------------------------------------------//

let globalCredentials = {
    password: "",
    email: ""
}

function storeSongsLocally() { //this function loads the songs from the database and loads them into the localstorage.
    if (!isAuthenticated) { //sees if the user is logged in
        showMessage(systemMessagesText[selectedLanguage][21], 2)
        return;
    }
    if (dbSongs.length == 0) { //checks if there are no songs saved
        showMessage(systemMessagesText[selectedLanguage][22], 2) //no songs saved
        return;
    } else {
        let message = "" //this is the message shown if some songs are already saved
        for (let i = 0; i < dbSongs.length; i++) {
            if(dbSongs[i].bpm == undefined) dbSongs[i].bpm = 220
            if(dbSongs[i].pitchLevel == undefined) dbSongs[i].pitchLevel = 0
            if(dbSongs[i].isComposed == undefined) dbSongs[i].isComposed = false
            if (document.getElementById("Song-" + dbSongs[i].name) != null) { //checks if there is already a song saved locally with that name
                if (document.getElementById("Song-" + dbSongs[i].name).getAttribute("fromDb") == "true") { //saves it only if the already saved one is from the database tab
                    saveSong(dbSongs[i].name, dbSongs[i].songNotes, 1,dbSongs[i].pitchLevel,dbSongs[i].bpm,dbSongs[i].isComposed) //saves the song locally
                } else {
                    message += 'Song: "' + dbSongs[i].name + '" '+systemMessagesText[selectedLanguage][23] //already saved
                }
            } else {
                saveSong(dbSongs[i].name, dbSongs[i].songNotes, 1,dbSongs[i].pitchLevel,dbSongs[i].bpm,dbSongs[i].isComposed) //saves the song locally
            }
        }
        if (message == "") message = systemMessagesText[selectedLanguage][24]
        showMessage(message, 2)
    }
}

//--------------------------------------------------------------------------------------------------------//

let dbSongs = []

function syncDB() { //Function that syncs the songs from the database in the client, this is triggered once when you open the database tab (to reduce load) and all
    // the times you press the "load songs from database" button 
    dbSongsDiv.innerHTML = ""
    let credentials = globalCredentials;
    if (!isAuthenticated) {
        showMessage(systemMessagesText[selectedLanguage][21], 2) //not logged
        return;
    }
    let request = new XMLHttpRequest();
    request.open("POST", "/getSongs");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8")
    request.onload = (res) => {
        response = res.target.response;
        try {
            var songsFromDB = JSON.parse(response)
        } catch {
            showMessage(response, 0)
            return;
        }
        dbSongs = songsFromDB
        if (songsFromDB.length == 0) showMessage(systemMessagesText[selectedLanguage][22]) //no songs saved in the database
        for (let i = 0; i < songsFromDB.length; i++) { //saves each individual song
            if(songsFromDB[i].bpm == undefined) songsFromDB[i].bpm = 220
            if(songsFromDB[i].pitchLevel == undefined) songsFromDB[i].pitchLevel = 0
            if(songsFromDB[i].isComposed == undefined) songsFromDB[i].isComposed = false
            saveSong(songsFromDB[i].name, songsFromDB[i].songNotes, 2,songsFromDB[i].pitchLevel,songsFromDB[i].bpm,songsFromDB[i].isComposed)
        }
    };
    request.onerror = function (e) {
        alert(systemMessagesText[selectedLanguage][25]) //error trying to get songs
    };
    request.send(JSON.stringify(credentials))
}

//--------------------------------------------------------------------------------------------------------//

function deleteFromDB(credentials, song) { //function to delete a song from the database of the account
    if (!isAuthenticated) {
        showMessage(systemMessagesText[selectedLanguage][2], 2) //not logged
        return;
    }
    let objToSend = {
        email: credentials.email,
        password: credentials.password,
        songName: song //this is done from the song name, it deletes everything that has this name
    }
    let request = new XMLHttpRequest();
    request.open("POST", "/deleteSong");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8")
    request.onload = (res) => {
        response = res.target.response;
        showMessage(response, 2)
    };
    request.onerror = function (e) {
        alert(systemMessagesText[selectedLanguage][26]) //error trying to delete
    };
    request.send(JSON.stringify(objToSend))
}

//--------------------------------------------------------------------------------------------------------//

function saveSongsToDB(credentials, songsToSend) { //saves a song to the database, first value is the credentials, second is the songs array to store
    if (!isAuthenticated) {
        showMessage(systemMessagesText[selectedLanguage][2], 2) //not logged
        return;
    }
    let objToSend = {
        email: credentials.email,
        password: credentials.password,
        song: songsToSend
    }
    let request = new XMLHttpRequest();
    request.open("POST", "/saveSongs");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8")
    request.onload = (res) => {
        response = res.target.response;
        showMessage(response, 2)
    };
    request.onerror = function (e) {
        alert(systemMessagesText[selectedLanguage][27]) //error trying ot save songs
    };
    if (JSON.stringify(objToSend).length > 50000) {
        showMessage(systemMessagesText[selectedLanguage][28], 2) //song is too big
        return;
    }
    request.send(JSON.stringify(objToSend))
}

//--------------------------------------------------------------------------------------------------------//

function resetForms() { //this resets the value of every form input
    for (let i = 0; i < inputs.length; i++) {
        inputs.value = ""
    }
}

//--------------------------------------------------------------------------------------------------------//

function confirmEmail() { //function to confirm the email. 
    let code = document.getElementById("codeConfirmation").value
    document.getElementById("confirmRegistration").style.display = "block"
    if (code.length != 6) {
        alert(systemMessagesText[selectedLanguage][29]) //you put an invalid code
        return;
    }
    let credentials = {
        code: code,
        email: registrationCredentials.email
    }
    let request = new XMLHttpRequest();
    request.open("POST", "/verifyAccount");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8")
    request.onload = (res) => {
        response = res.target.response;
        if (response == "true") { //if the server response is a true, it means that the account is created and it can continue with the login
            alert(systemMessagesText[selectedLanguage][30]) //account verified
            location.reload()
            return;
        }
        showMessage(response, 0)
    };
    request.onerror = function (e) {
        alert(systemMessagesText[selectedLanguage][12]) //error verifying account
    };
    request.send(JSON.stringify(credentials))
}
//--------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------// 
/*
  _                     _ _                            _         _ _       
 | |                   | (_)                          | |       (_) |      
 | |     ___   __ _  __| |_ _ __   __ _  __      _____| |__  ___ _| |_ ___ 
 | |    / _ \ / _` |/ _` | | '_ \ / _` | \ \ /\ / / _ \ '_ \/ __| | __/ _ \
 | |___| (_) | (_| | (_| | | | | | (_| |  \ V  V /  __/ |_) \__ \ | ||  __/
 |______\___/ \__,_|\__,_|_|_| |_|\__, |   \_/\_/ \___|_.__/|___/_|\__\___|
                                   __/ |                                   
                                  |___/ 

*/


var inputMode = localStorage.getItem("inputMode")
if(inputMode == null || !(inputMode=="touchstart" || inputMode == "pointerdown")){
    localStorage.setItem("inputMode","pointerdown")
    inputMode = "pointerdown"
}
if(inputMode == "touchstart") document.getElementById("change-button-input-mode").style.backgroundColor = "rgba(235, 0, 27, 0.8)"
function togglecompatibilityMode(){
    if(inputMode == "pointerdown"){
        localStorage.setItem("inputMode","touchstart")
    }else{
        localStorage.setItem("inputMode","pointerdown")
    }
    location.reload()
}

//--------------------------------------------------------------------------------------------------------// 

let inputs = document.getElementsByTagName("input")
let isTyping = false
for (let i = 0; i < inputs.length; i++) { //this sets for every input an event listener, this is done to prevent the keys from being clicked from the
    //letters being pressed, once it focuses it ignores every press, when unfocused it doesn't ignore them anymore
    inputs[i].addEventListener("focusin", function () {
        isTyping = true
    })
    inputs[i].addEventListener("focusout", function () {
        isTyping = false
    })
}

//--------------------------------------------------------------------------------------------------------//

let objKeys = { //those are the keyboards keys used to play the piano from the pc, it's not handy but it's still another function to have
    "q": "Key0",
    "w": "Key1",
    "e": "Key2",
    "r": "Key3",
    "t": "Key4",
    "a": "Key5",
    "s": "Key6",
    "d": "Key7",
    "f": "Key8",
    "g": "Key9",
    "z": "Key10",
    "x": "Key11",
    "c": "Key12",
    "v": "Key13",
    "b": "Key14"
}

//--------------------------------------------------------------------------------------------------------//

document.onkeypress = function (evt) {
    evt = evt || window.event
    let charCode = evt.keyCode || evt.which
    let charStr = String.fromCharCode(charCode).toLowerCase()
    //gets which key has been pressed and gets the corrisponding key associated to it and clicks it
    if (objKeys[charStr] != null && !isTyping) document.getElementById(objKeys[charStr]).dispatchEvent(click);
};

//--------------------------------------------------------------------------------------------------------//

function changeInstrument(button) { //function to change the instrument
    let chosenInstrument = button.id.replace("Btn", "") //gets which instrument has been selected
    document.getElementById("toggleInstruments").style.backgroundImage = button.style.backgroundImage //changes the image of the menu to the one instrument chosen
    instrumentsWrapper.style.display = "none"
    stopSong()
    changeInstrumentSound(chosenInstrument)
}

//--------------------------------------------------------------------------------------------------------//
let globalSelectedPitch = 0
function changePitch(value) {
    let  keyNumber = value.getAttribute("key")
    document.getElementById("togglePitchList").innerHTML = "Key " + value.innerHTML
    keyButtonName = keyNumber
    let buttons = document.getElementsByClassName("pitchSelection")
    let keyBtnTxt = document.getElementsByClassName("btnText")
    for (let i = 0; i < keyBtnTxt.length; i++) {
        keyBtnTxt[i].innerHTML = keyNames[keyButtonName - 1][i]
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.color = "#dad8b3"
    }
    value.style.color = "rgba(235, 0, 27, 0.7)"
    pitchTab.style.display = "none"
    let pValue = parseInt(keyNumber)
    globalSelectedPitch = pValue
    let pitchValue = Math.pow(2, (pValue - 1) / 12)
    if (!isNaN(pitchValue)) {
        pitchKey = pitchValue.toFixed(2)
        localStorage.setItem("pitchKey", pitchKey)
    }
}
//Loads the buttons with sounds
const db_url = './Sounds/'
let instrumentsNotes = {
    piano: ["Piano/0.mp3", "Piano/1.mp3", "Piano/2.mp3", "Piano/3.mp3", "Piano/4.mp3", "Piano/5.mp3", "Piano/6.mp3", "Piano/7.mp3", "Piano/8.mp3", "Piano/9.mp3", "Piano/10.mp3", "Piano/11.mp3", "Piano/12.mp3", "Piano/13.mp3", "Piano/14.mp3"],
    harp: ["Harp/0.mp3", "Harp/1.mp3", "Harp/2.mp3", "Harp/3.mp3", "Harp/4.mp3", "Harp/5.mp3", "Harp/6.mp3", "Harp/7.mp3", "Harp/8.mp3", "Harp/9.mp3", "Harp/10.mp3", "Harp/11.mp3", "Harp/12.mp3", "Harp/13.mp3", "Harp/14.mp3"],
    oldHarp: ["OldHarp/0.mp3", "OldHarp/1.mp3", "OldHarp/2.mp3", "OldHarp/3.mp3", "OldHarp/4.mp3", "OldHarp/5.mp3", "OldHarp/6.mp3", "OldHarp/7.mp3", "OldHarp/8.mp3", "OldHarp/9.mp3", "OldHarp/10.mp3", "OldHarp/11.mp3", "OldHarp/12.mp3", "OldHarp/13.mp3", "OldHarp/14.mp3"],
    bell: ["Bells/0.mp3", "Bells/1.mp3", "Bells/2.mp3", "Bells/3.mp3", "Bells/4.mp3", "Bells/5.mp3", "Bells/6.mp3", "Bells/7.mp3", "Bells/7.mp3", "Bells/7.mp3", "Bells/7.mp3", "Bells/7.mp3", "Bells/7.mp3", "Bells/7.mp3", "Bells/7.mp3"],
    guitar: ["Guitar/0.mp3", "Guitar/1.mp3", "Guitar/2.mp3", "Guitar/3.mp3", "Guitar/4.mp3", "Guitar/5.mp3", "Guitar/6.mp3", "Guitar/7.mp3", "Guitar/8.mp3", "Guitar/9.mp3", "Guitar/10.mp3", "Guitar/11.mp3", "Guitar/12.mp3", "Guitar/13.mp3", "Guitar/14.mp3"],
    flute: ["Flute/0.mp3", "Flute/1.mp3", "Flute/2.mp3", "Flute/3.mp3", "Flute/4.mp3", "Flute/5.mp3", "Flute/6.mp3", "Flute/7.mp3", "Flute/8.mp3", "Flute/9.mp3", "Flute/10.mp3", "Flute/11.mp3", "Flute/12.mp3", "Flute/13.mp3", "Flute/14.mp3"],
    xylophone: ["Xylophone/0.mp3", "Xylophone/1.mp3", "Xylophone/2.mp3", "Xylophone/3.mp3", "Xylophone/4.mp3", "Xylophone/5.mp3", "Xylophone/6.mp3", "Xylophone/7.mp3", "Xylophone/8.mp3", "Xylophone/9.mp3", "Xylophone/10.mp3", "Xylophone/11.mp3", "Xylophone/12.mp3", "Xylophone/13.mp3", "Xylophone/14.mp3"],
    drum: ["Drum/0.mp3", "Drum/1.mp3", "Drum/2.mp3", "Drum/3.mp3", "Drum/4.mp3", "Drum/5.mp3", "Drum/6.mp3", "Drum/7.mp3", "Drum/7.mp3", "Drum/7.mp3", "Drum/7.mp3", "Drum/7.mp3", "Drum/7.mp3", "Drum/7.mp3", "Drum/7.mp3"],
    horn: ["Horn/0.mp3", "Horn/1.mp3", "Horn/2.mp3", "Horn/3.mp3", "Horn/4.mp3", "Horn/5.mp3", "Horn/6.mp3", "Horn/7.mp3", "Horn/8.mp3", "Horn/9.mp3", "Horn/10.mp3", "Horn/11.mp3", "Horn/12.mp3", "Horn/13.mp3", "Horn/14.mp3"],
    toyUkulele: ["ToyUkulele/0.mp3", "ToyUkulele/1.mp3", "ToyUkulele/2.mp3", "ToyUkulele/3.mp3", "ToyUkulele/4.mp3", "ToyUkulele/5.mp3", "ToyUkulele/6.mp3", "ToyUkulele/7.mp3", "ToyUkulele/8.mp3", "ToyUkulele/9.mp3", "ToyUkulele/10.mp3", "ToyUkulele/11.mp3", "ToyUkulele/12.mp3", "ToyUkulele/13.mp3", "ToyUkulele/14.mp3"],

}
//Changes sounds when instrument is selected
function changeInstrumentSound(instrument) {
    localStorage.setItem('instrument', instrument)
    storedInstrument = instrument
    initializeKeyboard()
}
//Checks which instrument has been stored in localstorage, if none place piano
let storedInstrument = "piano"
if (localStorage.getItem("instrument")) {
    storedInstrument = localStorage.getItem("instrument")
    document.getElementById("toggleInstruments").style.backgroundImage = document.getElementById(storedInstrument + "Btn").style.backgroundImage
} else {
    localStorage.setItem("instrument", "piano")
}

//to change the key
let pitchKey = localStorage.getItem("pitchKey")
pitchKey = parseFloat(pitchKey)
if (pitchKey == null || pitchKey == "" || isNaN(pitchKey)) {
    pitchKey = 1
    localStorage.setItem("pitchKey", 1)
}
let keyButtonName = parseInt((Math.log2(pitchKey) * 12 + 1).toFixed(0))
let keyButtons = document.getElementsByClassName("pitchSelection")
keyButtons[keyButtonName - 1].style.color = "rgba(235, 0, 27, 0.7)"
document.getElementById("togglePitchList").innerHTML = "Key " + document.getElementById("pitchTab").children[keyButtonName-1].innerHTML
//Changes url of the instrument using the stored value in localStorage
let urls = instrumentsNotes[storedInstrument]

//--------------------------------------------------------------------------------------------------------//

function set_up_reverb() {
    fetch("reverb4.wav")
        .then(r => r.arrayBuffer())
        .then(b => a_ctx.decodeAudioData(b))
        .then(impulse_response => {
            let convolver = a_ctx.createConvolver()
            let gainNode = a_ctx.createGain()
            gainNode.gain.value = 2.5
            convolver.buffer = impulse_response
            convolver.connect(gainNode)
            gainNode.connect(a_ctx.destination)
            a_reverb_destination = convolver
        })
}

//--------------------------------------------------------------------------------------------------------//

function preload(urls) {
    const requests = urls.map(url => fetch(db_url + url)
        .then(r => r.arrayBuffer()) // this time we request as ArrayBuffer
        .then(b => {
            return new Promise((resolve, reject) => {
                a_ctx.decodeAudioData(b, resolve, reject)
            })
        })
    )
    return Promise.all(requests)
}

//--------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------//

//BUTTONS
let keyNames = {
    0: ["C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F", "G", "A", "B", "C"],
    1: ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C", "D♭", "E♭", "F", "G♭", "A♭", "B♭", "C", "D♭"],
    2: ["D", "E", "F♯", "G", "A", "B", "C♯", "D", "E", "F♯", "G", "A", "B", "C♯", "D"],
    3: ["E♭", "F", "G", "A♭", "B♭", "C", "D", "E♭", "F", "G", "A♭", "B♭", "C", "D", "E♭"],
    4: ["E", "F♯", "G♯", "A", "B", "C♯", "D♯", "E", "F♯", "G♯", "A", "B", "C♯", "D♯", "E"],
    5: ["F", "G", "A", "B♭", "C", "D", "E", "F", "G", "A", "B♭", "C", "D", "E", "F"],
    6: ["G♭", "A♭", "B♭", "C♭", "D♭", "E♭", "F", "G♭", "A♭", "B♭", "C♭", "D♭", "E♭", "F", "G♭"],
    7: ["G", "A", "B", "C", "D", "E", "F♯", "G", "A", "B", "C", "D", "E", "F♯", "G"],
    8: ["A♭", "B♭", "C", "D♭", "E♭", "F", "G", "A♭", "B♭", "C", "D♭", "E♭", "F", "G", "A♭"],
    9: ["A", "B", "C♯", "D", "E", "F♯", "G♯", "A", "B", "C♯", "D", "E", "F♯", "G♯", "A"],
    10: ["B♭", "C", "D", "E♭", "F", "G", "A", "B♭", "C", "D", "E♭", "F", "G", "A", "B♭"],
    11: ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯", "B", "C♯", "D♯", "E", "F♯", "G♯", "A♯", "B"]
}
const a_ctx = new(window.AudioContext || window.webkitAudioContext)()

let a_reverb_destination = a_ctx.destination // replaced by reverb path when loaded
set_up_reverb()

let numOfKeys = 15
let normalKeyboardKeyboardKeys = objKeys
function initializeKeyboard(){
    let buttonImages = ["diamondCircle", "Diamond", "Circle", "Diamond", "Circle", "Circle", "Diamond", "diamondCircle",
        "Diamond", "Circle", "Circle", "Diamond", "Circle", "Diamond", "diamondCircle"
    ]
    document.getElementById("touch").innerHTML =
    '<div class="Row1" id="row1"></div><div class="Row2" id="row2"></div><div class="Row3" id="row3"></div>'
    urls = instrumentsNotes[storedInstrument]
    preload(urls)
    .then(audioBuffers => {
        let newRowBreak = [6, 11]
            objKeys = normalKeyboardKeyboardKeys
        let numOfKeysLeft = 15
            numOfKeys = 15
        if (storedInstrument == "bell" || storedInstrument == "drum") {
            newRowBreak = [5, 9]
            numOfKeysLeft = 8
            numOfKeys = 8
            buttonImages = ["Circle", "Diamond", "Circle", "Diamond", "Circle", "Diamond", "Circle", "Diamond", "Circle", 
                "Diamond", "Circle", "Diamond", "Circle", "Diamond", "Circle"
            ]
            objKeys = {
                "q": "Key0",
                "w": "Key1",
                "e": "Key2",
                "r": "Key3",
                "a": "Key4",
                "s": "Key5",
                "d": "Key6",
                "f": "Key7"
            }
        }
        let j = 1
        audioBuffers.forEach((buf, i) => {
            //Creates button and sets the buttons properties .
            const btn = document.createElement('div')
            let background = "./KeyImages/" + buttonImages[i] + ".png"
            btn.innerHTML = "<div class='btnBg'><a class='btnText'>" + keyNames[keyButtonName - 1][i] + "</a></div><img class='btnImg' src='" + background + "'/>"
            btn.id = "Key" + i++
            if (i == newRowBreak[0]) j = 2
            if (i == newRowBreak[1]) j = 3
            document.getElementById("row" + j).appendChild(btn)
            numOfKeysLeft--
            if (numOfKeysLeft < 0) { //if there are no more keys to add, it makes the other buttons invisible
                btn.style.display = "none" // to make the buttons not clickable
                return
            }

            btn.addEventListener(inputMode, function (e) {
                buttonPressEvent(this)
                e.preventDefault()
            })

            function buttonPressEvent(btn) {
                toggleFullScreen()
                let btnBg = btn.firstChild
                let btnImg = btn.childNodes[1]
                $(btn).children(":first").finish()
                let bgColor = btnBg.style.backgroundColor
                if (bgColor == "rgba(235, 0, 27, 0.7)") {
                    btnBg.style.borderColor = "transparent"
                    practice([])
                }
                const source = a_ctx.createBufferSource()
                source.buffer = buf
                source.playbackRate.value = pitchKey;
                if (reverbToggled) {
                    source.connect(a_reverb_destination)
                } else {
                    source.connect(a_ctx.destination)
                }
                source.start(0)
                reply_click(btn.id)
                recordSong(btn.id)
                btnImg.classList.toggle("keyTurn")
                btn.classList.toggle("keyScale")
                resetKeyClass(btn)
            }
        })
    }).then(() => {
        if(localStorage.getItem("showNoteNames") == "true"){
            document.getElementById("Display-Note-Names").style.backgroundColor = "rgba(235, 0, 27, 0.8)"
            let keyTexts = document.getElementsByClassName("btnText")
            for (let i = 0; i < keyTexts.length; i++) { //makes the text inside the key buttons yellow
                keyTexts[i].style.color = "#dad8b3"
            }
        }
    })
}

//--------------------------------------------------------------------------------------------------------//

function resetKeyClass(element) {
    setTimeout(() => {
        element.childNodes[1].classList.remove("keyTurn")
        element.classList.remove("keyScale")
    }, 200)

}

let webVersion = localStorage.getItem("version")
let currentVersion = "3.4"
let changelogMessage = "Update version " + currentVersion + '<br>Improved composer, New accounts available again'
if (webVersion != currentVersion) {
    localStorage.setItem("version", currentVersion)
    showMessage(changelogMessage, 2, 8000)
}

//--------------------------------------------------------------------------------------------------------//

//Changes the brightness when button clicked.
function reply_click(clicked_id) {
    let i = clicked_id
    let a = i.replace(/Key/, '')
    let element = document.getElementById(i)
    element.style.filter = "brightness(130%)"
    let btnBg = element.firstChild
    btnBg.style.backgroundColor = "rgba(60, 60, 60, 0.65)"
    timer(element, a)
}

//--------------------------------------------------------------------------------------------------------//

//resets the color of the button
function timer(elem) {
    setTimeout(function () {
        elem.style.filter = 'brightness(100%)'
        let btnBg = elem.firstChild
        btnBg.style.backgroundColor = "rgba(22, 22, 22, 0.65)"
    }, 200)
}

//--------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------//
/*

  ______ _ _        _                            _                     _                              _   
 |  ____(_) |      (_)                          | |                   | |                            | |  
 | |__   _| | ___   _ _ __ ___  _ __   ___  _ __| |_    __ _ _ __   __| |   _____  ___ __   ___  _ __| |_ 
 |  __| | | |/ _ \ | | '_ ` _ \| '_ \ / _ \| '__| __|  / _` | '_ \ / _` |  / _ \ \/ / '_ \ / _ \| '__| __|
 | |    | | |  __/ | | | | | | | |_) | (_) | |  | |_  | (_| | | | | (_| | |  __/>  <| |_) | (_) | |  | |_ 
 |_|    |_|_|\___| |_|_| |_| |_| .__/ \___/|_|   \__|  \__,_|_| |_|\__,_|  \___/_/\_\ .__/ \___/|_|   \__|
                               | |                                                  | |                   
                               |_|                                                  |_|                   

*/
let filePicker = document.getElementById("filePicker")

function importSongs() {
    let isreading = false
    filePicker.addEventListener("change", function () { //once file is picked it reads the content
            let fr = new FileReader()
            fr.onload = function () {
                try {
                let inputSongs = JSON.parse(fr.result)
                inputSongs = convertToOldFormat(inputSongs)
                for (let i = 0; i < inputSongs.length && !isreading; i++) {
                    let element = document.getElementById("Song-" + inputSongs[i].name)
                    if (element == null) { //if there is an element with this id, it means that the song with that name already exists
                        if(inputSongs[i].bpm == undefined) inputSongs[i].bpm = 220
                        if(inputSongs[i].pitchLevel == undefined) inputSongs[i].pitchLevel = 0
                        if(inputSongs[i].isComposed == undefined) inputSongs[i].isComposed = false
                        saveSong(inputSongs[i].name, inputSongs[i].songNotes, 1,inputSongs[i].pitchLevel,inputSongs[i].bpm,inputSongs[i].isComposed)
                    } else {
                        console.log(systemMessagesText[selectedLanguage][9] + inputSongs[i].name + " n" + i) //song already exists
                        //showMessage("The song already exists: "+inputSongs[i].name,2) gets annoying after a while, idk if adding it back
                    }
                }
                isreading = true
                } catch {
                    showMessage(systemMessagesText[selectedLanguage][10],0,1000) //error importing song
                }
            }
            fr.readAsText(this.files[0])
    })
    filePicker.click()
}

//--------------------------------------------------------------------------------------------------------//

function downloadSongs() {
    let songs = localStorage.getItem("savedSongs") //gets the songs saved in localStorage and downloads them as JSON
    if (songs != null) { //if there were some songs saved
        songs = JSON.parse(songs)
        if (songs.length != 0) { //if there were some songs saved
            downloadJSON(songs, "mySongs")
        }
    }
}

//--------------------------------------------------------------------------------------------------------//

function convertToNewFormat(songs) {
    let convertedSongs = []
    for (let i = 0; i < songs.length; i++) {
        if(songs[i].bpm == undefined) songs[i].bpm = 220
        if(songs[i].pitchLevel == undefined) songs[i].pitchLevel = 0
        if(songs[i].isComposed == undefined) songs[i].isComposed = false
        let newFormat = {
            name: songs[i].name,
            bpm: parseInt(songs[i].bpm),
            bitsPerPage: 16,
            pitchLevel: parseInt(songs[i].pitchLevel),
            isComposed: songs[i].isComposed,
            songNotes: []
        }
        for (let j = 0; j < songs[i].songNotes.length; j++) {
            let keyObj = {
                time: songs[i].songNotes[j].time,
                key: "1" + songs[i].songNotes[j].key
            }
            newFormat.songNotes.push(keyObj)
        }
        convertedSongs.push(newFormat)
    }
    return convertedSongs
}

//--------------------------------------------------------------------------------------------------------//

function convertToOldFormat(songs) {
    if (!isNaN(songs[0].songNotes[0].key[0])) {
        let convertedSongs = []
        for (let i = 0; i < songs.length; i++) {
            if(songs[i].bpm == undefined) songs[i].bpm = 220
            if(songs[i].pitchLevel == undefined) songs[i].pitchLevel = 0
            if(songs[i].isComposed == undefined) songs[i].isComposed = false
            let oldFormat = {
                name: songs[i].name,
                bpm: songs[i].bpm,
                pitchLevel: songs[i].pitchLevel,
                isComposed: songs[i].isComposed,
                songNotes: [],
            }
            for (let j = 0; j < songs[i].songNotes.length; j++) {
                let keyObj = {
                    time: songs[i].songNotes[j].time,
                    key: songs[i].songNotes[j].key.substr(1)
                }
                oldFormat.songNotes.push(keyObj)
            }
            for(let k = 0;k < oldFormat.songNotes.length;k++){
                let max5 = 0
                for(let x = k+1;x < oldFormat.songNotes.length && max5<5;x++){
                    if(oldFormat.songNotes[k].time == oldFormat.songNotes[x].time && oldFormat.songNotes[k].key == oldFormat.songNotes[x].key){
                        oldFormat.songNotes.splice(k,1)
                    }
                    max5++
                }
            }
            convertedSongs.push(oldFormat)
        }
        return convertedSongs
    } else {
        return songs
    }
}

//--------------------------------------------------------------------------------------------------------//

function downloadJSON(inArray, fileName) {
    inArray = convertToNewFormat(inArray)
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(inArray));
    let dlAnchorElem = document.createElement("a")
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", fileName + ".txt");
    dlAnchorElem.click();
    dlAnchorElem.remove()
}

//--------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------//
/*
  __  __ _     _ _                   _             _ 
 |  \/  (_)   | (_)                 | |           | |
 | \  / |_  __| |_    ___ ___  _ __ | |_ _ __ ___ | |
 | |\/| | |/ _` | |  / __/ _ \| '_ \| __| '__/ _ \| |
 | |  | | | (_| | | | (_| (_) | | | | |_| | | (_) | |
 |_|  |_|_|\__,_|_|  \___\___/|_| |_|\__|_|  \___/|_|                                                 

*/
let isMidiAllowed = true;

function checkMidiAccess() {
    try {
        if (navigator.requestMIDIAccess()) {
            showMessage(systemMessagesText[selectedLanguage][33], 1) //midi is supported
        } else {
            showMessage(systemMessagesText[selectedLanguage][34], 0) //midi is not supported
        }
    } catch {
        showMessage(systemMessagesText[selectedLanguage][34], 0) //midi is not supported
    }
}
try {
    if (navigator.requestMIDIAccess()) {} else {}
} catch {}

//--------------------------------------------------------------------------------------------------------//

let click = new Event(inputMode)

function getMIDIMessage(message) {
    let command = message.data[0];
    let note = message.data[1];
    if (command == 144 && note > 35 && note < 61) { //if the command is keyDown and the noteNumber are between 36 and 60
        switch (note) {
            case 36:
                document.getElementById("Key0").dispatchEvent(click);
                break;
            case 38:
                document.getElementById("Key1").dispatchEvent(click);
                break;
            case 40:
                document.getElementById("Key2").dispatchEvent(click);
                break;
            case 41:
                document.getElementById("Key3").dispatchEvent(click);
                break;
            case 43:
                document.getElementById("Key4").dispatchEvent(click);
                break;
            case 45:
                document.getElementById("Key5").dispatchEvent(click);
                break;
            case 47:
                document.getElementById("Key6").dispatchEvent(click);
                break;
            case 48:
                document.getElementById("Key7").dispatchEvent(click);
                break;
            case 50:
                document.getElementById("Key8").dispatchEvent(click);
                break;
            case 52:
                document.getElementById("Key9").dispatchEvent(click);
                break;
            case 53:
                document.getElementById("Key10").dispatchEvent(click);
                break;
            case 55:
                document.getElementById("Key11").dispatchEvent(click);
                break;
            case 57:
                document.getElementById("Key12").dispatchEvent(click);
                break;
            case 59:
                document.getElementById("Key13").dispatchEvent(click);
                break;
            case 60:
                document.getElementById("Key14").dispatchEvent(click);
                break;
        }
    }
}
//--------------------------------------------------------------------------------------------------------//

/* 
  _____                        _ _             
 |  __ \                      | (_)            
 | |__) |___  ___ ___  _ __ __| |_ _ __   __ _ 
 |  _  // _ \/ __/ _ \| '__/ _` | | '_ \ / _` |
 | | \ \  __/ (_| (_) | | | (_| | | | | | (_| |
 |_|  \_\___|\___\___/|_|  \__,_|_|_| |_|\__, |
                                          __/ |
                                         |___/ 
 */
let isRecordToggled = false
let startTime


function askSongName(){
    var keyHeight = "calc((100vh - 6vw - 50px)/3)"
    var touchHeight = "calc(100vh - 50px)"
    $('[id^=Key]').css('height', $("#Key0").height());
    document.getElementById("touch").style.height = document.getElementById("touch").clientHeight + "px"
    var promptDiv = document.getElementById("promptDiv")
    var promptMessage = document.getElementById("promptMessage")
    document.getElementById("promptInput").value = ""
    promptMessage.innerHTML = systemMessagesText[selectedLanguage][0]
    promptDiv.style.display = "block"
    document.getElementById("promptOK").addEventListener("click",function(){
        var promptInput = document.getElementById("promptInput").value
        if(promptInput == null || promptInput == "" || promptInput == " "){
            promptMessage.innerHTML = systemMessagesText[selectedLanguage][1]
        }else{
            if (document.getElementById("Song-" + promptInput) == null) { //if there is already a song with that name, ask to rename it
                saveSong(promptInput, songArray, 1,globalSelectedPitch,200,false)
                promptDiv.style.display = "none"
                songArray = []
                $('[id^=Key]').css('height', keyHeight)
                document.getElementById("touch").style.height = touchHeight;
            }else{
                promptMessage.innerHTML = systemMessagesText[selectedLanguage][2]+promptInput //already saved
            }
        }
    })
    document.getElementById("promptCancel").addEventListener("click",function(){
        promptDiv.style.display = "none"
        songArray = [] 
        $('[id^=Key]').css('height', keyHeight)
        document.getElementById("touch").style.height = touchHeight;
    })
}

//--------------------------------------------------------------------------------------------------------//

function toggleRecord() {
    if (isRecordToggled) { //if the recording is toggled already then it means it was listening, now stops listening and saves the song
        if (songArray.length != 0) {
            askSongName()
        }
        toggleRecordBtn.style.backgroundColor = "rgba(22, 22, 22, 0.65)"
    } else {
        songArray = []
        toggleRecordBtn.style.backgroundColor = "rgba(235, 0, 27, 0.8)"
    }
    isRecordToggled = !isRecordToggled
    startTime = new Date().getTime()
}

//--------------------------------------------------------------------------------------------------------//


let songArray = []
//Each time a button is pressed, if the record is toggled, it adds a timestamp and what button is pressed
function recordSong(pressedKey) {
    if (isRecordToggled) {
        pressTime = new Date().getTime()
        let keyPressObject = {
            time: pressTime - startTime,
            key: pressedKey
        }
        songArray.push(keyPressObject)
    }
}

//--------------------------------------------------------------------------------------------------------//

let savedSongsDiv = document.getElementById("savedSongsDiv")
let savedSongsDivWrapper = document.getElementById("savedSongsDivWrapper")
let menu = document.getElementById("icon-bar");
let menuButton = document.getElementById("menu");
document.getElementById("touch").addEventListener("click", function () {
    floatingMessage = document.getElementById("floatingMessage")
    pitchTab.style.display = "none"
    floatingMessage.style.display = "none"
    savedSongsDivWrapper.style.display = "none"
    instrumentsWrapper.style.display = "none"
    menu.style.display = "none"
    menuButton.style.display = "block"
    promptDiv.style.display = "none"
    $('[id^=Key]').css('height', "calc((100vh - 6vw - 50px)/3)")
    document.getElementById("touch").style.height = "calc(100vh - 50px)";
})

//--------------------------------------------------------------------------------------------------------//

//TAB PAGE FOR SAVED SONGS
function openSonglist(evt, listType) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
    document.getElementById(listType).style.display = "block";
    if (listType == "dbSongs" && dbSongs.length == 0) syncDB() //if it's the first time pressing the button
}

//--------------------------------------------------------------------------------------------------------//

//this loads the stored songs in local storage and adds them to the recorded songs, the "true" in saveSong() means that it doesn't have to add 
//the song to the favourites because it is already saved
let preLoadSongs = localStorage.getItem("savedSongs")
if (preLoadSongs != null) {
    preLoadSongs = JSON.parse(preLoadSongs)
    for (let i = 0; i < preLoadSongs.length; i++) {globalSelectedPitch
        if(preLoadSongs[i].bpm == undefined) preLoadSongs[i].bpm = 220
        if(preLoadSongs[i].pitchLevel == undefined) preLoadSongs[i].pitchLevel = 0
        if(preLoadSongs[i].isComposed == undefined) preLoadSongs[i].isComposed = false
        saveSong(preLoadSongs[i].name, preLoadSongs[i].songNotes, 0,preLoadSongs[i].pitchLevel,preLoadSongs[i].bpm,preLoadSongs[i].isComposed)
    }
}

//--------------------------------------------------------------------------------------------------------//

function saveSong(songName, song, savingType,pitch = 0,bpm = 200,isComposed = false) { //the name of the song, the array containing the key press and time stamp, if it has to be ignored or not for the save option
    try {
        let songObj = {
            name: songName,
            songNotes: song,
            pitchLevel:parseInt(pitch),
            bpm: parseInt(bpm),
            isComposed: isComposed
        }
    if (savingType == "1") { //doesnt save if it is preloading   
        let songStorage = localStorage.getItem("savedSongs")
        if (songStorage != null) {
            songStorage = JSON.parse(songStorage)
            songStorage.push(songObj)
            localStorage.setItem("savedSongs", JSON.stringify(songStorage))
        } else {
            songStorage = [songObj]
            localStorage.setItem("savedSongs", JSON.stringify(songStorage))
        }
    }
    //--------------------------------// Dinamically create the button to play the song
    let songContainer = document.createElement("div")
    let songButton = document.createElement("button")
    songButton.setAttribute("songName", songName)
    songButton.addEventListener("click", function () {
        savedSongsDivWrapper.style.display = "none"
        let storedSongName = this.getAttribute("songName")
        let songText = document.getElementById("Song-" + storedSongName)
        resetButtons()
        playSong(JSON.parse(songText.innerHTML),songText.getAttribute("pitchLevel"))
    })
    songButton.innerHTML = songName
    songButton.className = "skyButton"
    songButton.style.width = "calc(100% - 135px - 5em)"
    //--------------------------------// This holds the text of the array of the song 
    let songText = document.createElement("div")
    songText.setAttribute("fromDb", false)
    songText.setAttribute("pitchLevel",songObj.pitchLevel)
    songText.setAttribute("bpm",songObj.bpm)
    songText.setAttribute("isComposed",songObj.isComposed)
    songText.style.display = "none"
    songText.id = "Song-" + songName
    songText.innerHTML = JSON.stringify(song)
    songContainer.appendChild(songButton)
    songContainer.appendChild(songText)
    console.log("song added!")

    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "❌"
    deleteButton.className = "skyButton"
    deleteButton.style.width = "40px"
    deleteButton.style.marginLeft = "0.1em"
    deleteButton.setAttribute("songName", songName)
    let saveToDb
    if (savingType == "2") { //if its a song coming from the database, put the delete button also to delete it from the db
        songText.setAttribute("fromDb", true)
        deleteButton.innerHTML = "❌"
        dbSongsDiv.appendChild(songContainer)
        deleteButton.addEventListener("click", function () {
            if (confirm("Delete song: " + this.getAttribute("songName") + " from database?")) {
                this.parentNode.parentNode.removeChild(this.parentNode)
                deleteFromDB(globalCredentials, this.getAttribute("songName"))
            }
        })
    var shareLink = document.createElement("button")
        shareLink.innerHTML = "<img src='icons/share.png' alt='share'  width='25px' style='vertical-align: bottom; margin:-2.5px;'\/>"
        shareLink.className = "skyButton"
        shareLink.style.marginLeft = "0.1em"
        shareLink.style.width = "40px"
        shareLink.setAttribute("songName", songName)
        shareLink.addEventListener("click", function () {
            generateShareLink(this.getAttribute("songName"))
        })
    } else {
        savedSongsDiv.appendChild(songContainer)
        //--------------------------------// button to delete the song from the saved and to delete it from the menu
        deleteButton.addEventListener("click", function () {
            if (confirm("Delete song: " + this.getAttribute("songName") + "?")) {
                this.parentNode.parentNode.removeChild(this.parentNode)
                let savedSongs = localStorage.getItem("savedSongs")
                if (savedSongs != null) {
                    savedSongs = JSON.parse(savedSongs)
                    for (let i = 0; i < savedSongs.length; i++) { //reads trough all the elements of the localStorage and deletes the index of this song
                        if (savedSongs[i].name == this.getAttribute("songName")) {
                            savedSongs.splice(i, 1)
                            break
                        }
                    }
                    localStorage.setItem("savedSongs", JSON.stringify(savedSongs))
                }
            }
        })

        saveToDb = document.createElement("button")
        saveToDb.innerHTML = "<img src='icons/saveToDb.png' alt='share' width='25px' style='vertical-align: bottom; margin:-2.5px;'/>"
        //https://www.flaticon.com/free-icon/diskette_965418?term=save%20cloud&page=1&position=31
        saveToDb.className = "skyButton"
        saveToDb.style.marginLeft = "0.1em"
        saveToDb.style.width = "40px"
        saveToDb.setAttribute("songName", songName)
        saveToDb.addEventListener("click", function () {
            let storedSongName = this.getAttribute("songName")
            let songText = document.getElementById("Song-" + storedSongName)
            let songArrayToDB = []
            let songObj = {
                name: storedSongName,
                songNotes: JSON.parse(songText.innerHTML),
                pitchLevel: parseInt(songText.getAttribute("pitchLevel")),
                bpm: parseInt(songText.getAttribute("bpm")),
                isComposed: songText.getAttribute("isComposed")
            }
            songArrayToDB.push(songObj)
            saveSongsToDB(globalCredentials, songArrayToDB)
        })
    }
    //--------------------------------// Button to play this song in practice mode
    let trainSong = document.createElement("button")
    trainSong.innerHTML = "🎯"
    trainSong.className = "skyButton"
    trainSong.style.width = "40px"
    trainSong.style.marginLeft = "0.1em"
    trainSong.setAttribute("songName", songName)
    trainSong.addEventListener("click", function () {
        savedSongsDivWrapper.style.display = "none"
        let storedSongName = this.getAttribute("songName")
        let songText = document.getElementById("Song-" + storedSongName)
        console.log(songText.getAttribute("isComposed"))
        if(songText.getAttribute("isComposed") == "true"){
            threshold = 50
        }
        else{
            threshold = 80
        }
        practice(JSON.parse(songText.innerHTML))
        startingNoteRange.value = 0
        rangePicker.value = 0
        rangePicker.max = JSON.parse(songText.innerHTML).length - 1
        currentSong = JSON.parse(songText.innerHTML)
        $(songRange).fadeIn(200)
        toggleSongRange()
    })
    //--------------------------------// Button to share this song
    let shareButton = document.createElement("button")
    shareButton.innerHTML = "<img src='icons/download.png' alt='share'  width='25px' style='vertical-align: bottom; margin:-2.5px;'\/>"
    shareButton.style.color = "lightgreen"
    shareButton.style.fontWeight = "bold"
    shareButton.className = "skyButton"
    shareButton.style.width = "40px"
    shareButton.style.marginLeft = "0.1em"
    shareButton.setAttribute("songName", songName)
    shareButton.addEventListener("click", function () {
        let storedSongName = this.getAttribute("songName")
        let songText = document.getElementById("Song-" + storedSongName)
        let songObj = {
            name: storedSongName,
            pitchLevel: parseInt(songText.getAttribute("pitchLevel")),
            bpm: parseInt(songText.getAttribute("bpm")),
            isComposed: songText.getAttribute("isComposed"),
            songNotes: JSON.parse(songText.innerHTML)
        }
        let array = []
        array.push(songObj)
        downloadJSON(array, storedSongName)
    })
    songContainer.appendChild(deleteButton)
    songContainer.appendChild(trainSong)
    if (saveToDb != undefined){
        songContainer.appendChild(saveToDb)
    }else{
        songContainer.appendChild(shareLink)
            }
    songContainer.appendChild(shareButton)
    
    } catch {
        showMessage(systemMessagesText[selectedLanguage][10],0,1500) //error importing song
    }
}

//--------------------------------------------------------------------------------------------------------//

let isSongStopped = false

function stopSong() {
    isSongStopped = true
    document.getElementById("stopSong").style.visibility = "hidden"
    resetButtons()
    clearInterval(checkStuck)
    $(songRange).fadeOut(200)
}

let date = new Date
let globalPlayTimestamp = date.getTime()
async function playSong(song,pitch) {
    /*
    if(pitch != undefined || pitch != null ){
        changePitch(document.getElementById("pitch"+(parseInt(pitch)+1)))
    }
    */
    document.getElementById("stopSong").style.visibility = "visible"
    clearInterval(checkStuck)
    $(songRange).fadeOut(200)
    let delayTime = 0
    let previousTime = 0
    date = new Date
    let startSongTimestamp = date.getTime()
    let ignoreStop = false
    globalPlayTimestamp = startSongTimestamp
    isSongStopped = false
    for (let i = 0; i < song.length; i++) {
        if (isSongStopped) break;
        if (globalPlayTimestamp != startSongTimestamp){ ignoreStop = true; break}
        delayTime = song[i].time - previousTime //how much time has to pass from one note to the other
        previousTime = song[i].time //the time from the start of the previous note, to be later calculated to get the delayTime
        await delay(delayTime)
        document.getElementById(song[i].key).dispatchEvent(click);
    }
    isSongStopped = false
    if(!ignoreStop) document.getElementById("stopSong").style.visibility = "hidden"
}

//--------------------------------------------------------------------------------------------------------//

function resetButtons() {
    for(let i = 0; i < numOfKeys; i++){
       $("#Key"+i).children(":first").finish()
    }
    for (let i = 0; i < numOfKeys; i++) {
        let btnBg = document.getElementById("Key" + i).firstChild
        btnBg.style.backgroundColor = "rgba(22, 22, 22, 0.65)"
        btnBg.style.borderColor = "transparent"
    }
}

//--------------------------------------------------------------------------------------------------------//

/*
  _____                _   _          
 |  __ \              | | (_)         
 | |__) | __ __ _  ___| |_ _  ___ ___ 
 |  ___/ '__/ _` |/ __| __| |/ __/ _ \
 | |   | | | (_| | (__| |_| | (_|  __/
 |_|   |_|  \__,_|\___|\__|_|\___\___|
                                                                         
*/
let songToPractice = []
let keysToPress = []
let threshold = 80
let keysToWait = 1
let betweenKeysTimes = []
let timeToWait = 0
let nextKeysToPress = []
betweenKeysTimes.push(0) //offsets the first key
let checkStuck
function practice(inSong) {
    document.getElementById("stopSong").style.visibility = "visible"
    if (inSong.length != 0) { //If there is a song to be added, if there isn't it means that it comes from a ping from the button
        //RESET OF VALUES AND SETTING UP THE SONG
        betweenKeysTimes = []
        betweenKeysTimes.push(0)
        timeToWait = 0
        songToPractice = inSong 
        keysToWait = 1
        resetButtons()
    let timesStuck = 0
        checkStuck = setInterval(() => {
            let isStuck = true
            for(let i = 0;i<14;i++){
                let current = document.getElementById("Key"+i).firstChild.style.backgroundColor
                let next = document.getElementById("Key"+(i+1)).firstChild.style.backgroundColor
                if(current != next){
                    isStuck = false
                    timesStuck = 0
                    break
                }
            }
            if(isStuck) timesStuck++
            if(timesStuck == 3) timesStuck = 0,console.log("reset"), practice([]),timesStuck = 0
        }, 200);
        for (let i = 1; i < songToPractice.length; i++) { //stores the time between keys
            betweenKeysTimes.push(songToPractice[i].time - songToPractice[i - 1].time)
        }
    }
    if (songToPractice.length == 0) {
        document.getElementById("stopSong").style.visibility = "hidden"
        clearInterval(checkStuck)
        $(songRange).fadeOut(200)
        return
    }
    keysToWait--
    if (keysToWait == 0) {
        keysToPress = []
        nextKeysToPress = []
        for (let i = 0; i < songToPractice.length; i++) {
            if ((songToPractice[i].time - songToPractice[0].time) < threshold) { //if the time between the next keys is lower than the threshold then it appends to the keys to be played
                keysToPress.push(songToPractice[i])
            }
        }
        for (let i = keysToPress.length; i < songToPractice.length; i++) {
            if ((songToPractice[i].time - songToPractice[keysToPress.length].time) < threshold) {
                nextKeysToPress.push(songToPractice[i])
            }
        }
        setTimeout(() => { //delays from the ping so that it lets the key change it's color 
            setTimeout(() => {
                for (let i = 0; i < nextKeysToPress.length && !disableNextKey; i++) {
                    $("#" + nextKeysToPress[i].key).children(":first").animate({
                        "border-color": '#1BB8E8'
                    }, 220)
                }
            }, timeToWait - 320)
            betweenKeysTimes.splice(0, keysToPress.length) //removes the times of each button since they arent used
            for (let i = 0; i < keysToPress.length; i++) { //it changes the color to the reddish one and removes the keys to be pressed from the array
                $("#" + keysToPress[i].key).children(":first").cssborderColor = "transparent"
                if (disableAnimation) {
                    $("#" + keysToPress[i].key).children(":first").css("border-color", "transparent").css({
                        backgroundColor: 'rgba(235, 0, 27, 0.7)'
                    })

                } else {
                    $("#" + keysToPress[i].key).children(":first").css("border-color", "transparent").animate({
                        backgroundColor: 'rgba(235, 0, 27, 0.7)'
                    }, timeToWait)

                }
                songToPractice.splice(0, 1)
            }
            timeToWait = betweenKeysTimes[0] - 220 //gets the first time of the array, that one is the time for the next one.
        }, 220)

        keysToWait = keysToPress.length //those are the keys presses to do before searching for the next key combination
    }
}

//--------------------------------------------------------------------------------------------------------//

let rangePicker = document.getElementById("rangePicker")
let startingNoteRange = document.getElementById("startingNoteRange")
rangePicker.value = 0
rangePicker.addEventListener("input", function () {
    startingNoteRange.value = rangePicker.value
})
let currentSong
let retrySong
let pressedRetry = false

//--------------------------------------------------------------------------------------------------------//

function retry() {
    let startPoint = parseInt(startingNoteRange.value)
    retrySong = currentSong.slice(startPoint, currentSong.length)
    practice(retrySong)
    resetButtons()
}
//delay function
const delay = ms => new Promise(res => setTimeout(res, ms))
initializeKeyboard()

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => {
          console.log('Service worker registered.', reg);
        });
  });
}
