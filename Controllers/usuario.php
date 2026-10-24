<?php 

class usuario extends Controller{

public function index()
{
    print_r($this->model->getusuario()); 
}
}




?>