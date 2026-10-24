<?php 

class usuarioModel extends Query{
   public function __construct()
   {
     parent::__construct(); 
   } 

   public function getusuario()
   {
     $sql = "SELECT * FROM USUARIO"; 
     $data = $this->select($sql); 
     return $data; 
   }
}

?> 