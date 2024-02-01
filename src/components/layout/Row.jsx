import React from 'react';

export default function Row({children, className, gap}) {
  return (
      <div style={{gap: gap ? gap : 0}} className={`flex flex-wrap ${className ? className : ''}`}>

        {children !== null && Array.isArray(children) ? children.map(child => {
              // Caso seja uma coluna, informa o gap, passando-o como prop para a coluna (através do cloneElement pq os props são read-only)
              // com isso, é possivel calcular o tamanho da coluna de acordo com o gap da sua linha
              if (child.type.name === 'Column') {
                return React.cloneElement(child, {gap: gap});
              }
              return child;
            }) :
            children !== null ? children : null
        }
      </div>
  );
}