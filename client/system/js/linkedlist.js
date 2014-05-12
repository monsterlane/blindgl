
define(function( ) {
	/**
	 * Class: DoublyLinkedList
	 */

	function DoublyLinkedList( ) {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	DoublyLinkedList.prototype = {
		constructor: DoublyLinkedList,
		add: function( data ) {
			var node = {
				data: data,
				next: null,
				prev: null
			};

			if ( this.length == 0 ) {
				this.head = node;
				this.tail = node;
			}
			else {
				this.tail.next = node;
				node.prev = this.tail;
				this.tail = node;
			}

			this.length++;
		},
		item: function( index ) {
			if ( index > -1 && index < this.length ) {
				var current = this.head;
				var i = 0;

				while( i++ < index ) {
					current = current.next;
				}

				return current.data;
			}
			else {
				return null;
			}
		},
		remove: function( index ) {
			if ( index > -1 && index < this.length ) {
				var current = this.head;
				var i = 0;

				if ( index === 0 ) {
					this.head = current.next;

					if ( !this.head ) {
						this.tail = null;
					}
					else {
						this.head.prev = null;
					}
				}
				else if ( index === this.length - 1 ) {
					current = this.tail;
					this.tail = current.prev;
					this.tail.next = null;
				}
				else {
					while( i++ < index ) {
						current = current.next;
					}

					current.prev.next = current.next;
				}

				this.length--;

				return current.data;
			}
			else {
				return null;
			}
		},
		size: function( ) {
			return this.length;
		},
		toArray: function( ) {
			var result = [ ];
			var current = this.head;

			while( current ){
				result.push( current.data );
				current = current.next;
			}

			return result;
		},
		toString: function( ) {
			return this.toArray( ).toString( );
		}
	};

	return DoublyLinkedList;
});
