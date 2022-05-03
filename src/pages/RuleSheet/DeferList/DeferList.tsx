import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Breadcrumbs,
  Button,
  Chip,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@material-ui/core';
import Style from './Style';
import { useNavigate, useParams } from 'react-router-dom';
import { IRule, IRuleSheet } from '../../../interfaces';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StatusBullet from '../../../components/StatusBullet';

const columns: GridColDef[] = [
  {
    field: 'title',
    headerName: 'Título',
    minWidth: 200,
  },
  {
    field: 'date',
    headerName: 'Data',
    minWidth: 150,
    type: 'date',
  },
  {
    field: 'author',
    headerName: 'Autor',
    minWidth: 250,
    sortable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    minWidth: 230,
    sortable: false,
    renderCell: params => {
      const classes = Style();

      return (
        <Chip
          className={classes.chipStatus}
          avatar={<StatusBullet status={params.value as string} />}
          label={params.value}
        />
      );
    },
  },
];

export const DeferRulesList = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [record, setRecord] = useState<IRuleSheet | undefined>();
  const [loadingRecord, setLoadingRecord] = useState<boolean>(false);

  const [pageSize, setPageSize] = useState<number>(10);

  const [listSelectionId, setListSelectionId] = useState<string[]>([]);

  const [code, setCode] = useState<string | undefined>('');
  const [author, setAuthor] = useState<string | undefined>('');
  const [rules, setRules] = useState<IRule[]>([]);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const codeInputLabel = useRef<HTMLLabelElement>();
  const authorInputLabel = useRef<HTMLLabelElement>();
  const [codeLabelWidth, setCodeLabelWidth] = React.useState(0);
  const [authorLabelWidth, setAuthorLabelWidth] = React.useState(0);

  const classes = Style();

  const onBackClickHandler = () => {
    navigate('/rulesheets');
  };

  const onCodeChangeHandler = event => {
    setCode(event.target.value);
  };

  const onAuthorChangeHandler = event => {
    setAuthor(event.target.value);
  };

  const onSearchClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    if (!record) {
      return;
    }
    let _isFiltering = false;
    let listRule = record.rules;
    if (code) {
      listRule = listRule.filter(rule => rule.id === code);
      _isFiltering = true;
    }
    if (author) {
      listRule = listRule.filter(rule => rule.author === author);
      _isFiltering = true;
    }
    setIsFiltering(_isFiltering);
    setRules(listRule);
  };

  const onPageSizeChangeHandler = (newPageSize: number) => {
    setPageSize(newPageSize);
  };

  const onSelectionModelChangeHandler = (selectionModel: GridSelectionModel, details: any) => {
    setListSelectionId(selectionModel as string[]);
  };

  const fetchRecord = async () => {
    if (loadingRecord) {
      return;
    }
    setLoadingRecord(true);
    // TODO: Implement the API request
    // The Promise below simulates the loading time of the request, remove it when you implement the request itself.
    await new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    // Remove the next line when the request is implemented.
    setRecord({
      id,
      name: 'Internet APF',
      slug: 'internet-apf',
      description:
        'É uma plataforma de onboarding para não correntistas e correntistas PF/PJ e GOV. \nO objetivo é que cada cliente acesse uma página que reflita, de maneira personalizada, os seus interesses e serviços do Banco do Brasil',
      code: '12345678',
      rules: [
        {
          id: '1',
          title: 'Alteração no Bundle',
          date: new Date(2021, 11, 20, 10, 55, 30, 500),
          author: 'C1313233 Rhuan Queiroz',
          status: 'Aguardando deferimento',
        },
        {
          id: '2',
          title: 'Alteração no Bundle',
          date: new Date(2022, 2, 5, 10, 55, 30, 500),
          author: 'C1313233 Rhuan Queiroz',
          status: 'Aguardando deferimento',
        },
        {
          id: '3',
          title: 'Alteração no Bundle',
          date: new Date(2022, 1, 2, 10, 55, 30, 500),
          author: 'C1313233 Rhuan Queiroz',
          status: 'Aguardando deferimento',
        },
        {
          id: '4',
          title: 'Alteração no Bundle',
          date: new Date(2022, 1, 2, 10, 55, 30, 500),
          author: 'C1313233 Rhuan Queiroz',
          status: 'Aguardando deferimento',
        },
        {
          id: '5',
          title: 'Alteração no Bundle',
          date: new Date(2022, 1, 2, 10, 55, 30, 500),
          author: 'C1313233 Rhuan Queiroz',
          status: 'Aguardando deferimento',
        },
        {
          id: '6',
          title: 'Alteração no Bundle',
          date: new Date(2022, 1, 2, 10, 55, 30, 500),
          author: 'C1313233 Rhuan Queiroz',
          status: 'Aguardando deferimento',
        },
        {
          id: '7',
          title: 'Alteração no Bundle',
          date: new Date(2022, 1, 2, 10, 55, 30, 500),
          author: 'C1313233 Rhuan Queiroz',
          status: 'Aguardando deferimento',
        },
        {
          id: '8',
          title: 'Alteração no Bundle',
          date: new Date(2022, 1, 2, 10, 55, 30, 500),
          author: 'C1313233 Rhuan Queiroz',
          status: 'Aguardando deferimento',
        },
        {
          id: '9',
          title: 'Alteração no Bundle',
          date: new Date(2022, 1, 2, 10, 55, 30, 500),
          author: 'C1313233 Rhuan Queiroz',
          status: 'Aguardando deferimento',
        },
        {
          id: '10',
          title: 'Alteração no Bundle',
          date: new Date(2022, 1, 2, 10, 55, 30, 500),
          author: 'C1313233 Rhuan Queiroz',
          status: 'Aguardando deferimento',
        },
        {
          id: '11',
          title: 'Alteração no Bundle',
          date: new Date(2022, 1, 2, 10, 55, 30, 500),
          author: 'C1313233 Rhuan Queiroz',
          status: 'Aguardando deferimento',
        },
      ],
    });
    setLoadingRecord(false);
  };

  useEffect(() => {
    fetchRecord();
  }, []);

  useEffect(() => {
    if (!record) {
      return;
    }
    setRules(record.rules);
  }, [record]);

  useEffect(() => {
    if (codeInputLabel.current) {
      setCodeLabelWidth(codeInputLabel.current.offsetWidth);
    }
    if (authorInputLabel.current) {
      setAuthorLabelWidth(authorInputLabel.current.offsetWidth);
    }
  }, [codeInputLabel.current, authorInputLabel.current]);

  const renderLoadingRecord = () => {
    return (
      <div className={classes.loadingRecord}>
        <Typography variant="h2" component="p">
          Loading...
        </Typography>
      </div>
    );
  };

  if (loadingRecord) {
    return renderLoadingRecord();
  }

  const renderFilterSearch = () => {
    if (!isFiltering && rules.length <= 10) {
      return;
    }
    return (
      <div className={classes.filtersContainer}>
        <FormControl variant="outlined" className={classes.filterSelect}>
          <InputLabel ref={codeInputLabel} id="filter-code-select-input-label">
            Filtrar por código
          </InputLabel>
          <Select
            labelId="filter-code-select-label"
            id="filter-code-select"
            value={code}
            onChange={onCodeChangeHandler}
            label="Código"
            input={
              <OutlinedInput labelWidth={codeLabelWidth} name="code-input" id="outlined-code" />
            }
          >
            <MenuItem value="">Todos</MenuItem>
            {[...new Set(record?.rules.map(rule => rule.id))].map((id, index) => {
              return (
                <MenuItem key={index} value={id}>
                  {id}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.filterSelect}>
          <InputLabel ref={authorInputLabel} id="filter-author-select-input-label">
            Filtrar por autor
          </InputLabel>
          <Select
            labelId="filter-author-select-label"
            id="filter-author-select"
            onChange={onAuthorChangeHandler}
            value={author}
            label="Autor"
            input={
              <OutlinedInput
                labelWidth={authorLabelWidth}
                name="author-input"
                id="outlined-author"
              />
            }
          >
            <MenuItem value="">Todos</MenuItem>
            {[...new Set(record?.rules.map(rule => rule.author))].map((author, index) => {
              return (
                <MenuItem key={index} value={author}>
                  {author}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="secondary"
          className={classes.buttonSearch}
          onClick={onSearchClickHandler}
        >
          Buscar
        </Button>
      </div>
    );
  };

  return (
    <Box className={classes.root}>
      <div className={classes.breadcrumbsContainer}>
        <IconButton onClick={onBackClickHandler} size="small">
          <ArrowBackIcon fontSize="small" color="primary" />
        </IconButton>
        <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
          <Link color="textPrimary" component={RouterLink} to="/">
            FeatWS
          </Link>
          <span className={classes.breadcrumbsSeparator}>/</span>
          <Link color="textPrimary" component={RouterLink} to={`/rulesheets/${id}`}>
            {record?.name}
          </Link>
          <span className={classes.breadcrumbsSeparator + ' last'}>/</span>
          <Typography component="span" className={classes.breadcrumbActive}>
            Deferimento
          </Typography>
        </Breadcrumbs>
      </div>
      <div className={classes.headingContainer}>
        <h1 className={classes.h1}>Quais regras você quer deferir?</h1>
      </div>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={8} className={classes.gridLeft}>
          {renderFilterSearch()}
          <DataGrid
            className={classes.dataGrid}
            rows={rules}
            columns={columns}
            pageSize={pageSize}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            onPageSizeChange={onPageSizeChangeHandler}
            autoHeight
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={onSelectionModelChangeHandler}
          />
          <Divider className={classes.divider} />
          <div className={classes.containerActionButtons}>
            <Button variant="contained" color="secondary">
              Voltar
            </Button>
            <Button variant="contained" color="primary" className={classes.buttonAdvance}>
              Avançar
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};
