package br.com.dio.service;

import br.com.dio.model.Board;

public class SudokuSolver {

    private final BoardService service = new BoardService();

    public boolean solve(Board board) {

        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {

                if (board.getBoard()[row][col].equals(" ")) {

                    for (int num = 1; num <= 9; num++) {
                        String value = String.valueOf(num);

                        if (service.isValidMove(board, row, col, value)) {
                            board.setValue(row, col, value);

                            if (solve(board)) {
                                return true;
                            }

                            board.setValue(row, col, " ");
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
}
