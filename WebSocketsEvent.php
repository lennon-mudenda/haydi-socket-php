<?php
/*
* @project: Mini WebSocketsServer for Php Web Apps
* @author: Lennon Sigwena Mudenda
* @version: v1.0.0
* @required: GuzzleHttp
*/
namespace App;

use \GuzzleHttp\Client;
/**
 * Event Class
 */
class Event
{
	public static $allowed_events = [

		// example events
		'user-logged-in',
		'user-logged-out',
		'message-sent'

	];
	private $event;
	private $socket_url = "http://localhost:3000/events/";

	function __construct($event = "")
	{
		$this->event = $event;
		$this->emit();
	}

	private function emit()
	{
		if (in_array($this->event, self::$allowed_events))
		{
			$client = new Client();
			$client->get($this->url.$this->event);
		}
	}
}

?>
