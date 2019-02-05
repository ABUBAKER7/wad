<?php 
include("database_connection.php");


	$string = array("https://stackoverflow.com/questions/9607903/get-dpmain-name-from-given-url","https://websiteseocjecker.com/extract-url-to-domain/#arearresult","https://www.facebook.com/groups/1944204655670756/","https://localhost/waducpf18/finalterm/","https://www.youtube.com/watch?v=LSDxjp6sWYQ","https://www.google.com/search?q=extract");

foreach ($string as $key => $single)
 {
	$count=preg_match('/^(https:\/\/www\.|https:\/\/)?([0-9]|[a-z])+\.?(com)?\/(.*)?/',$single);

	$db_name=parse_url($single);

 /* echo $db_name['host'].'<br>';*/

	
    $query=mysqli_query($con,"INSERT INTO domain_name(db_name) VALUES ('".$db_name['host']."')") or die(mysqli_error($con));
}
$query="select * from domain_name";
$result=mysqli_query($con,$query);

?>

<!DOCTYPE html>

<html>
    <head>
        <title> Fetching data </title>
    </head>

 <table align="center" border="1px" style="width:600px; line-height:40px;">

        <tr>
            <th colspan="4"><h2>Domain</h2></th>
        </tr>
        <t>
            <th> ID </th>
            <th> Name </th>
           
        </t>
    <?php 
        while($rows=mysqli_fetch_array($result))
        {
    ?>        
            <tr>
                <td><?php echo $rows['db_id']; ?></td>
                <td><?php echo $rows['db_name']; ?></td>
                
            </tr>
    <?php     
        }
    ?>    
    </table>

   </body>

</html>