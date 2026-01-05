package br.com.dio.service;

import br.com.dio.model.Board;

public class BoardService {

    public boolean isValidMove(Board board, int row, int col, String value) {

        if (!value.matches("[1-9]")) {
            return false;
        }

        return !existsInRow(board, row, value)
                && !existsInColumn(board, col, value)
                && !existsInBlock(board, row, col, value);
    }

    private boolean existsInRow(Board board, int row, String value) {
        for (int col = 0; col < 9; col++) {
            if (board.getBoard()[row][col].equals(value)) {
                return true;
            }
        }
        return false;
    }

    private boolean existsInColumn(Board board, int col, String value) {
        for (int row = 0; row < 9; row++) {
            if (board.getBoard()[row][col].equals(value)) {
                return true;
            }
        }
        return false;
    }

    private boolean existsInBlock(Board board, int row, int col, String value) {
        int startRow = (row / 3) * 3;
        int startCol = (col / 3) * 3;

        for (int i = startRow; i < startRow + 3; i++) {
            for (int j = startCol; j < startCol + 3; j++) {
                if (board.getBoard()[i][j].equals(value)) {
                    return true;
                }
            }
        }
        return false;
    }

    public Object[] toArray(Board board) {
        Object[] values = new Object[81];
        int index = 0;

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                values[index++] = board.getBoard()[i][j];
            }
        }
        return values;
    }
}
