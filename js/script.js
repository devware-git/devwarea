
/**
* Adiciona a classe .load aos elementos após a pagina principal estiver totalmente carregada.
* @author: David
*/
window.onload = () => {
    setTimeout( () => {

        document.querySelector( '#loading' ).classList.add( 'load' ); 
        document.querySelector( '#main' ).classList.add( 'load' );

        // const menu = document.querySelector( '.menuonload' );
        // menu.classList.add( 'load' );

        // // Chama uma função logo após a transição de "menu" for finalizada. @David
        // menu.addEventListener( 'transitionend', () => {
        //     removerClasse( menu, 'menuonload' )
        // });
        
    }, 1000)
}

// Remove, caso exista, uma classe de um determinado elemento. @David
function removerClasse( element, class_name ) {
    let list = Object.values(element.classList);
    list.includes( class_name ) && element.classList.remove( class_name );
}