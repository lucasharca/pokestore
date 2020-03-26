import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { hideModal } from '../../store/modules/modal/actions';

import { StyledModal } from './styles';

export default function Modal() {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.modal.modal);

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={() => dispatch(hideModal(false))}
        onEscapeKeydown={() => dispatch(hideModal(false))}
      >
        <div className="topPokebal">
          <span>Compra realizada com sucesso!</span>
          <span> Retorno de R$xxx,xxx</span>
        </div>
        <div className="bottomPokeball">
          <span>
            <button
              type="button"
              className="end"
              onClick={() => dispatch(hideModal(true))}
            >
              Finalizar
            </button>
            <button
              type="button"
              className="back"
              onClick={() => dispatch(hideModal(false))}
            >
              Voltar
            </button>
          </span>
        </div>
      </StyledModal>
    </div>
  );
}
