import {
	FILIATORIOS,
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
	PSIQUIATRICA,
	PSICOLOGICA,
	NUTRICIONAL,
	SET_USER,
} from '../actions/constants';

const initialState = {
	usuarioActual: {},
	pacienteActual: {
		filiatorios: {},
		admision: [],
		semiologia: [],
		psiquiatria: [],
		psicologia: [],
		nutrcion: [],
		medicacion: [],
		ingreso: [],
		idPatient: '',
	},
	token: '',
	editarFiliatorio: false,
	codigo: [],
	solapaPaciente: 'Biografia',
	activeSearch: false,
	menuSolapa: true,
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case FILIATORIOS:
			return {
				...state,
				pacienteActual: {
					...state.pacienteActual,
					filiatorios: action.payload.filiatorios || {},
					admision: action.payload.admision || [],
					semiologia: action.payload.semiologia || [],
					psiquiatria: action.payload.psiquiatria || [],
					psicologia: action.payload.psicologia || [],
					nutricion: action.payload.nutricion || [],
					medicacion: action.payload.medicacion || [],
					ingreso: action.payload.ingreso || [],
					idPatient: action.payload.filiatorios.dni || '',
				},
			};

		case SET_USER: {
			return {
				...state,
				usuarioActual: action.payload,
			};
		}

		case FORMULARIO:
			return {
				...state,
				pacienteActual: {
					...state.pacienteActual,
					filiatorios: {
						...state.pacienteActual.filiatorios,
						...action.payload,
					},
					idPatient: action.payload.dni,
				},
			};

		case SET_PACIENTE:
			return {
				...state,
				pacienteActual: action.payload,
			};

		case ADMISION:
			return {
				...state,
				pacienteActual: {
					...state.pacienteActual,
					admision: action.payload,
				},
			};

		case SEMIOLOGICA:
			return {
				...state,
				pacienteActual: {
					...state.pacienteActual,
					semiologia: [...state.pacienteActual.semiologia, action.payload],
				},
			};

		case PSIQUIATRICA:
			return {
				...state,
				pacienteActual: {
					...state.pacienteActual,
					psiquiatria: [...state.pacienteActual.psiquiatria, action.payload],
				},
			};

		case PSICOLOGICA:
			return {
				...state,
				pacienteActual: {
					...state.pacienteActual,
					psicologia: action.payload,
				},
			};

		case NUTRICIONAL:
			return {
				...state,
				pacienteActual: {
					...state.pacienteActual,
					nutricion: action.payload,
				},
			};

		case GET_TOKEN:
			return {
				...state,
				token: action.payload,
			};

		case GET_CODE:
			return {
				...state,
				codigo: action.payload,
			};

		case PAGE:
			return {
				...state,
				page: action.payload.page,
			};

		case EDITAR_FILIATORIO:
			return {
				...state,
				editarFiliatorio: action.payload,
			};

		case DNI_PACIENTE:
			return {
				...state,
				dniPaciente: action.payload,
			};

		case SOLAPA_PACIENTE:
			return {
				...state,
				solapaPaciente: action.payload,
			};

		case ACTIVE_SEARCH:
			return {
				...state,
				activeSearch: action.payload,
			};

		case MENU_SOLAPA:
			return {
				...state,
				menuSolapa: action.payload,
			};

		default:
			return state;
	}
};

export default rootReducer;
