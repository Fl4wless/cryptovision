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
      &:first-child {
        padding-left: 10px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
    }

    thead {
      tr {
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

        th {
          padding: 10px 0px;
          position: sticky;
          background: ${({ theme }) => theme.colors.lightGray};
          top: 0;
        }
      }
    }
    tbody {
      tr {
        &:hover {
          background: rgba(0, 0, 0, 0.02);
          cursor: pointer;
        }

        &:first-child {
          background: gold;

          .icon-wrapper {
            display: grid;
            place-items: center;
            background: white;
            width: fit-content;
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
        }

        td {
          padding: 15px 0px;

          &:first-child {
            padding-left: 10px;
          }
        }
      }
    }
  }
`;
