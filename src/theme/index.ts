import { createTheme } from '@mui/material/styles';
import { GridLocaleText, ptBR as ptBRDataGrid } from '@mui/x-data-grid';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { ptBR } from '@mui/material/locale';

import palette from './palette';
import bbTypography from './bbTypography';

const ptBRMuiTablePaginationOverride = {
  defaultProps: {
    ...ptBR.components.MuiTablePagination.defaultProps,
    labelRowsPerPage: 'Itens por página',
    labelDisplayedRows: ({ count, from, to }) => `Mostrando ${from}-${to} itens de ${count} itens`,
  },
};

const ptBRMuiDataGridOverride = {
  defaultProps: {
    localeText: {
      ...(
        ptBRDataGrid as {
          components: { MuiDataGrid: { defaultProps: { localeText: GridLocaleText } } };
        }
      ).components.MuiDataGrid.defaultProps.localeText,
      MuiTablePagination: ptBRMuiTablePaginationOverride,
      footerRowSelected: (count: number) => {
        if (count === 1) {
          return '1 item selecionado';
        }
        if (count > 1) {
          return `${count} itens selecionados`;
        }
        return '';
      },
    },
  },
};

const theme = createTheme(
  {
    palette,
    typography: bbTypography,
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
      },
      MuiBreadcrumbs: {
        styleOverrides: {
          separator: {
            display: 'none',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: '12px 27.5px',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '16px',
            letterSpacing: '1.25px',
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          message: {
            color: palette.text.primary,
            fontSize: 16,
            fontWeight: 400,
          },
          filled: {
            '& .MuiAlert-action': {
              color: 'rgba(0, 0, 0, 0.6)',
            },
          },
          filledSuccess: {
            backgroundColor: 'rgb(239, 248, 240)',
            '& .MuiAlert-icon': {
              color: palette.success.light,
            },
          },
          filledError: {
            backgroundColor: 'rgb(253, 237, 237)',
            '& .MuiAlert-icon': {
              color: palette.error.light,
            },
          },
          filledInfo: {
            backgroundColor: 'rgb(236, 246, 254)',
            '& .MuiAlert-icon': {
              color: palette.info.light,
            },
          },
          filledWarning: {
            backgroundColor: 'rgb(255, 246, 233)',
            '& .MuiAlert-icon': {
              color: palette.warning.light,
            },
          },
        },
      },
      MuiAlertTitle: {
        styleOverrides: {
          root: {
            fontSize: 16,
          },
        },
      },
      MuiDataGrid: {
        styleOverrides: {
          root: {
            border: 'none',
            '& .MuiDataGrid-main': {
              '& .MuiDataGrid-columnsContainer': {
                backgroundColor: 'rgba(0, 0, 0, 0.01)',
                boxShadow: 'inset 0px -1px 0px #E0E0E0',
                '& .MuiDataGrid-columnHeader': {
                  padding: '0 10px 0 8px',
                  '&:focus': {
                    outline: 'none',
                  },
                  '&:focus-within': {
                    outline: 'none',
                  },
                  '& .MuiDataGrid-columnHeaderTitleContainer': {
                    padding: 0,
                    '& .MuiDataGrid-columnHeaderTitle': {
                      color: 'rgba(0, 0, 0, 0.6);',
                      fontWeight: 700,
                      fontSize: '15px',
                      lineHeight: '24px',
                    },
                    '& .MuiDataGrid-columnSeparator': {
                      display: 'none',
                    },
                  },
                },
              },
              '& .MuiDataGrid-cell': {
                borderColor: '#E0E0E0;',
                color: 'black',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0.5px',
                padding: '0 8px',
                '&:focus-within': {
                  outline: 'none',
                },
              },
            },
          },
        },
      },
    },
  },
  ptBR,
  {
    components: {
      MuiTablePagination: ptBRMuiTablePaginationOverride,
    },
  },
  {
    components: {
      MuiDataGrid: ptBRMuiDataGridOverride,
    },
  },
);

export default theme;
