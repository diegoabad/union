import axios from 'axios';
import {
	FILIATORIOS,
	ESTADO,
	PAGE,
	ADMISION,
	EDITAR_FILIATORIO,
	GET_TOKEN,
	GET_CODE,
	SEMIOLOGICA,
	DNI_PACIENTE,
	SOLAPA_PACIENTE,
	ACTIVE_SEARCH,
	MENU_SOLAPA,
	SET_PACIENTE,
  FORMULARIO,
} from './constants';
import dotenv from 'dotenv';
dotenv.config();

export function getFiliatorios(payload) {
	return {
		type: FILIATORIOS,
		payload: payload,
	};
}

export function getAdmision(payload) {
	return {
		type: ADMISION,
		payload: payload,
	};
}

export function getSemiologica(payload) {
	return {
		type: SEMIOLOGICA,
		payload: payload,
	};
}

export function postToken() {
	return async function (dispatch) {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}token`
			);
			return dispatch({
				type: GET_TOKEN,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getCode(search, token) {
	return async function (dispatch) {
		try {
			var configuracion = {
				method: 'get',
				url: `${process.env.REACT_APP_API_URL}code?q=${search}`,
				headers: {
					'x-auth-token': token,
				},
			};
			const response = await axios(configuracion);
			return dispatch({
				type: GET_CODE,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function setPage(payload) {
	return {
		type: PAGE,
		payload: payload,
	};
}

export function editFiliatorios(payload) {
	return {
		type: EDITAR_FILIATORIO,
		payload: payload,
	};
}

export function getEstado() {
	return {
		type: ESTADO,
	};
}

export function getDniPaciente(payload) {
	return {
		type: DNI_PACIENTE,
		payload,
	};
}

export function getSolapaPaciente(payload) {
	return {
		type: SOLAPA_PACIENTE,
		payload,
	};
}

export function getActiveSearch(payload) {
	return {
		type: ACTIVE_SEARCH,
		payload,
	};
}

export function getMenuSolapa(payload) {
	return {
		type: MENU_SOLAPA,
		payload,
	};
}

export function getPaciente(payload) {
	return {
		type: SET_PACIENTE,
		payload,
	};
}

export function getFormulario(payload) {
  return {
    type: FORMULARIO,
    payload,
  };
}