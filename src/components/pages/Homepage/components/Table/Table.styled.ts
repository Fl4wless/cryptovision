import styled from 'styled-components';

export const TableSC = styled.div`
  height: 500px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGray};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray};
    border-radius: 10px;
  }

  table {
    width: 100%;
    height: 500px;
    border-collapse: collapse;

    th {
      text-align: left;
    }

    thead {
      background: ${({ theme }) => theme.colors.lightGray};
      tr {
        th {
          padding: 10px 0px;
        }
      }
    }
    tbody {
      tr {
        &:hover {
          background: rgba(0, 0, 0, 0.02);
          cursor: pointer;
        }
        td {
          padding: 15px 0px;
        }
      }
    }
  }
`;
