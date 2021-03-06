<?php

class Admin_ajax extends Controller {

    function xhrGetblogCatListings() {
	$this->model->xhrGetblogCatListings();
	exit();
    }

    function xhrDelblogCatListing() {
	echo json_encode($this->model->xhrDelblogCatListing());
    }

    function xhrGetblogCatList() {
	$this->model->xhrGetblogCatList();
	exit();
    }

    function xhrAddblogCat() {
	$msg = $this->model->xhrAddblogCat();
	echo json_encode($msg);
	exit();
    }

    function xhrGetQuestionCatListings() {
	$this->model->xhrGetQuestionCatListings();
	exit();
    }

    function xhrDelQuestionCatListing() {
	echo json_encode($this->model->xhrDelQuestionCatListing());
    }

    function xhrGetQuestionCatList() {
	$this->model->xhrGetQuestionCatList();
	exit();
    }

    function xhrAddQuestionCat() {
	echo json_encode($this->model->xhrAddQuestionCat()); 
	exit();
    }
    
    function xhrGettestCatListings() {
	$this->model->xhrGettestCatListings();
	exit();
    }
    
    function xhrDeltestCatListing() {
	echo json_encode($this->model->xhrDeltestCatListing());
    }
    
    function xhrGettestCatList() {
	$this->model->xhrGettestCatList();
	exit();
    }
    
    function xhrAddtestCat() {
	$msg = $this->model->xhrAddtestCat();
	echo json_encode($msg);
	exit();
    }
    
}

//